/*
 * Create on Tue 21, 2019
 * Use function responsivefy to resize.
 * FIXME: bugs when resizing!
 */
// Dimensions of sunburst.
//var width = window.innerWidth;
//var height = window.innerHeight;
var width = 800;
var height = 600;
var radius = Math.min(width, height) / 2;

// Breadcrumb dimensions: width, height, spacing, width of tip/tail.
var b = {
  w: 75, h: 30, s: 3, t: 10
};

// Mapping of step names to colors.
var colors = {
  home: "#5687d1",
  product: "#7b615c",
  search: "#de783b",
  account: "#6ab975",
  other: "#a173d1",
  end: "#bbbbbb"
};

// Total size of all segments; we set this later, after loading the data.
var totalSize = 0; 

var vis = d3.select("#chart").append("svg:svg") // namespace:tagname in XHTML
            // .style('width', '100vw')
            // .style('height', '100vh')
            .attr('width', width)
            .attr('height', height)
            .call(responsivefy)
            //.classed("svg-content", true)
            //.attr('viewBox', `${-width / 2} ${-height / 2} ${width} ${height}`)
            .append("svg:g")
            .attr("id", "container")
            .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");

var partition = d3.partition()
    .size([2 * Math.PI, radius * radius]);

var arc = d3.arc()
    .startAngle(d => d.x0)
    .endAngle(d => d.x1)
    .innerRadius(d => Math.sqrt(d.y0))
    .outerRadius(d => Math.sqrt(d.y1));

// Use d3.text and d3.csvParseRows so that we do not need to have a header
// row, and can receive the csv as an array of arrays.
//d3.text("visit-sequences.csv", function(text) { // v4
d3.text("visit-sequences.csv").then(text => { // v5
  var csv = d3.csvParseRows(text);
  var json = buildHierarchy(csv);
  createVisualization(json);
});

// Main function to draw and set up the visualization, once we have the data.
function createVisualization(json) {
  // Basic setup of page elements.
  initializeBreadcrumbTrail();
  drawLegend();
  d3.select("#togglelegend").on("click", toggleLegend);

  // Bounding circle underneath the sunburst, to make it easier to detect
  // when the mouse leaves the parent g.
  vis.append("svg:circle")
      .attr("r", radius)
      .style("opacity", 0);

  // Turn the data into a d3 hierarchy and calculate the sums.
  var root = d3.hierarchy(json)
      .sum(d => d.size)
      .sort((a, b) => b.value - a.value);
  
  // For efficiency, filter nodes to keep only those large enough to see.
  var nodes = partition(root).descendants()
      .filter(d => (d.x1 - d.x0 > 0.005)); // 0.005 radians = 0.29 degrees

  var path = vis.data([json]).selectAll("path")
      .data(nodes)
      .enter().append("svg:path")
      .attr("display", d => d.depth ? null : "none")
      .attr("d", arc)
      .attr("fill-rule", "evenodd")
      .style("fill", d => colors[d.data.name])
      .style("opacity", 1)
      .on("mouseover", mouseover);

  // Add the mouseleave handler to the bounding circle.
  d3.select("#container").on("mouseleave", mouseleave);

  // Get total size of the tree = value of root node from partition.
  totalSize = path.datum().value;

  computeExplanationPosition();
};

// Fade all but the current sequence, and show it in the breadcrumb trail.
function mouseover(d) {
  var percentage = (100 * d.value / totalSize).toPrecision(3);
  var percentageString = percentage + "%";
  if (percentage < 0.1) {
    percentageString = "< 0.1%";
  }

  d3.select("#percentage").text(percentageString);

  d3.select("#explanation").style("visibility", "");

  var sequenceArray = d.ancestors().reverse();
  sequenceArray.shift(); // remove root node from the array
  updateBreadcrumbs(sequenceArray, percentageString);

  // Fade all the segments.
  d3.selectAll("path").style("opacity", 0.3);

  // Then highlight only those that are an ancestor of the current segment.
  vis.selectAll("path")
      .filter(node => sequenceArray.indexOf(node) >= 0)
      //.filter(function(node) {
      //  return (sequenceArray.indexOf(node) >= 0);
      //})
      .style("opacity", 1);
}

// Restore everything to full opacity when moving off the visualization.
function mouseleave(d) {
  // Hide the breadcrumb trail
  d3.select("#trail")
      .style("visibility", "hidden");

  // Deactivate all segments during transition.
  d3.selectAll("path").on("mouseover", null);

  // Transition each segment to full opacity and then reactivate it.
  d3.selectAll("path")
      .transition()
      .duration(1000)
      .style("opacity", 1)
      // .on("end", () => d3.select(this).on("mouseover", mouseover)); // buggy
      .on("end", function() {
          d3.select(this).on("mouseover", mouseover);
      });

  d3.select("#explanation")
      .style("visibility", "hidden");
}

function initializeBreadcrumbTrail() {
  // Add the svg area.
  var trail = d3.select("#sequence").append("svg:svg")
      .attr("width", width)
      .attr("height", 50)
      .attr("id", "trail");
  // Add the label at the end, for the percentage.
  trail.append("svg:text")
    .attr("id", "endlabel")
    .style("fill", "#000");
}

// Generate a string that describes the points of a breadcrumb polygon.
function breadcrumbPoints(d, i) {
  var points = [];
  points.push("0,0");
  points.push(b.w + ",0");
  points.push(b.w + b.t + "," + (b.h / 2));
  points.push(b.w + "," + b.h);
  points.push("0," + b.h);
  if (i > 0) { // Leftmost breadcrumb; don't include 6th vertex.
    points.push(b.t + "," + (b.h / 2));
  }
  return points.join(" ");
}

// Update the breadcrumb trail to show the current sequence and percentage.
function updateBreadcrumbs(nodeArray, percentageString) {
  // Data join; key function combines name and depth (= position in sequence).
  var trail = d3.select("#trail")
      .selectAll("g")
      .data(nodeArray, d => d.data.name + d.depth);

  // Remove exiting nodes.
  trail.exit().remove();

  // Add breadcrumb and label for entering nodes.
  var entering = trail.enter().append("svg:g");

  entering.append("svg:polygon")
      .attr("points", breadcrumbPoints)
      .style("fill", d => colors[d.data.name]);

  entering.append("svg:text")
      .attr("x", (b.w + b.t) / 2)
      .attr("y", b.h / 2)
      .attr("dy", "0.35em")
      .attr("text-anchor", "middle")
      .text(d => d.data.name);

  // Merge enter and update selections; set position for all nodes.
  entering.merge(trail).attr("transform", (d, i) =>
    "translate(" + i * (b.w + b.s) + ", 0)"
  );

  // Now move and update the percentage at the end.
  d3.select("#trail").select("#endlabel")
      .attr("x", (nodeArray.length + 0.5) * (b.w + b.s))
      .attr("y", b.h / 2)
      .attr("dy", "0.35em")
      .attr("text-anchor", "middle")
      .text(percentageString);

  // Make the breadcrumb trail visible, if it's hidden.
  d3.select("#trail")
      .style("visibility", "");
}

function drawLegend() {
  // Dimensions of legend item: width, height, spacing, radius of rounded rect.
  var li = {
    w: 75, h: 30, s: 3, r: 3
  };

  var legend = d3.select("#legend").append("svg:svg")
      .attr("width", li.w)
      .attr("height", d3.keys(colors).length * (li.h + li.s));

  var g = legend.selectAll("g")
      .data(d3.entries(colors))
      .enter().append("svg:g")
      .attr("transform", (d, i) => "translate(0," + i * (li.h + li.s) + ")");

  g.append("svg:rect")
      .attr("rx", li.r)
      .attr("ry", li.r)
      .attr("width", li.w)
      .attr("height", li.h)
      .style("fill", d => d.value);

  g.append("svg:text")
      .attr("x", li.w / 2)
      .attr("y", li.h / 2)
      .attr("dy", "0.35em")
      .attr("text-anchor", "middle")
      .text(d => d.key);
}

function toggleLegend() {
  var legend = d3.select("#legend");
  if (legend.style("visibility") == "hidden") {
    legend.style("visibility", "");
  } else {
    legend.style("visibility", "hidden");
  }
}

function computeExplanationPosition() {
  // var chartBox = document.querySelector("div#chart.svg-container");
  // var legendBox = document.querySelector("div#sidebar");  
  // var left = chartBox.clientWidth / 2 - legendBox.clientWidth;
  // var top = chartBox.clientHeight / 2;
  //var radius = Math.min(clientWidth, clientHeight) / 2;
  var left = width / 2;
  var top = height / 2;

  d3.select("#explanation")
    .style("top", top + "px")
    .style("left", left + "px");
}

// Take a 2-column CSV and transform it into a hierarchical structure suitable
// for a partition layout. The first column is a sequence of step names, from
// root to leaf, separated by hyphens. The second column is a count of how 
// often that sequence occurred.
function buildHierarchy(csv) {
  var root = {name: "root", children: []};
  for (var i = 0; i < csv.length; i++) {
    var sequence = csv[i][0];
    var size = +csv[i][1];
    if (isNaN(size)) { // e.g. if this is a header row
      continue;
    }
    var parts = sequence.split("-");
    var currentNode = root;
    for (var j = 0; j < parts.length; j++) {
      var children = currentNode["children"];
      var nodeName = parts[j];
      var childNode;
      if (j + 1 < parts.length) {
        // Not yet at the end of the sequence; move down the tree.
        var foundChild = false;
        for (var k = 0; k < children.length; k++) {
          if (children[k]["name"] == nodeName) {
            childNode = children[k];
            foundChild = true;
            break;
          }
        }
        // If we don't already have a child node for this branch, create it.
        if (!foundChild) {
          childNode = {name: nodeName, children: []};
          children.push(childNode);
        }
        currentNode = childNode;
      } else {
        // Reached the end of the sequence; create a leaf node.
        childNode = {name: nodeName, size: size};
        children.push(childNode);
      }
    }
  }
  return root;
};

function responsivefy(svg) {
  // The container will be the DOM element the svg is appended to.
  // We then measure the container and find its aspect ratio.
  const container = d3.select(svg.node().parentNode),
      width = parseInt(svg.style('width'), 10),
      height = parseInt(svg.style('height'), 10),
      aspect = width / height;
      console.log(width + " * " + height);

  // Add viewBox attribute and set its value to the initial size.
  // Add preserveAspectRatio attribute to specify how to scale,
  // and call resize so that svg resizes on inital page load.
  svg.attr('viewBox', `0 0 ${width} ${height}`)
    .attr('preserveAspectRatio', 'xMinYMid')
    .call(resize);

  // Add a listener so the chart will be resized when the window resizes.
  // To register multiple listeners for same event type,
  // you need to add namespace, i.e., 'click.foo'.
  // Necessary if you invoke this function for multiple svgs.
  // API docs: https://github.com/mbostock/d3/wiki/Selections#on
  d3.select(window).on('resize.' + container.attr('id'), resize);

  // This is the code that actually resizes the chart,
  // and will be called on load and in response to window resize,
  // gets the width of the container and proportionally resizes the svg to fit.
  function resize() {
      const targetWidth = parseInt(container.style('width'));
      svg.attr('width', targetWidth);
      svg.attr('height', Math.round(targetWidth / aspect));
  }
}
