var nodeData = {name: "TOPICS", children: [{
    name: "Topic A",
    children: [{name: "Sub A1", "size": 4}, {name: "Sub A2", "size": 4}]
  }, {
    name: "Topic B",
    children: [{name: "Sub B1", "size": 3}, {name: "Sub B2", "size": 3},
               {name: "Sub B3", "size": 3}]
  }, {
    name: "Topic C",
    children: [{name: "Sub A1", "size": 4}, {name: "Sub A2", "size": 4}]
  }]
};

// Initializes variables
var width = 500;                                   // <-- 1
var height = 500;
var radius = Math.min(width, height) / 2;          // < -- 2
var color = d3.scaleOrdinal(d3.schemeCategory20b); // <-- 3

// Setting up our SVG workspace
var g = d3.select('svg')  // <-- 1
    .attr('width', width) // <-- 2
    .attr('height', height)
    .append('g')          // <-- 3
    .attr('transform', 'translate(' + width / 2 + ',' + height / 2 + ')'); // <-- 4

// Formatting the Data
var partition = d3.partition()    // <-- 1
    .size([2 * Math.PI, radius]); // <-- 2

// Find the Root Node
var root = d3.hierarchy(nodeData) // <-- 1
    .sum(d => d.size)             // <-- 2
    .sort((a, b) => b.value - a.value);

// Calculate each arc
partition(root);    // <-- 1, data binding
var arc = d3.arc()  // <-- 2
    .startAngle(d => { d.x0s = d.x0; return d.x0; })
    .endAngle(d => { d.x1s = d.x1; return d.x1; })
    .innerRadius(d => d.y0)
    .outerRadius(d => d.y1);

// Draw a Slice for Each Node
var slice = g.selectAll('g')
    .data(root.descendants())
    .enter()
    .append('g')
    .attr("class", "node");

slice.append("path")
    .attr("display", d => d.depth ? null : "none")
    .attr("d", arc)
    .style('stroke', '#fff')
    .style("fill", d => color((d.children ? d : d.parent).data.name));

// Add a Label for Each Node
g.selectAll(".node")
    .append("text")
    .attr("transform", d => "translate(" + arc.centroid(d) + ")rotate("
                             + computeTextRotation(d) + ")")
    .attr("dx", "-20")
    .attr("dy", ".5em")
    .text(d => d.parent ? d.data.name : "");

d3.selectAll(".sizeSelect").on("click", function(d, i) {  // <-- 1
    // Determine how to size the slices.
    if (this.value === "size") {  // <-- 2
      root.sum(d => d.size);  // <-- 3
    } else {  // <-- 2
      root.count();  // <-- 4
    }
    root.sort((a, b) => b.value - a.value);  // <-- 5

    partition(root);  // <-- 6

    slice.selectAll("path")
         .transition()
         .duration(750)
         .attrTween("d", arcTweenPath); // <-- 7
    slice.selectAll("text")
         .transition()
         .duration(750)
         .attrTween("transform", arcTweenText); // <-- 8
});

function computeTextRotation(d) {
    var angle = (d.x0 + d.x1) / Math.PI * 90; // <-- 1

    // Avoid upside-down labels
    // <--2 "labels aligned with slices"
    return (angle < 90 || angle > 270) ? angle : angle + 180;

    // Alternate label formatting
    //return (angle < 180) ? angle - 90 : angle + 90;  // <-- 3 "labels as spokes"
}

function arcTweenPath(a, i) {
    var oi = d3.interpolate({ x0: a.x0s, x1: a.x1s }, a);  // <-- 1
    function tween(t) {  // <-- 2
        var b = oi(t);  // <-- 3
        a.x0s = b.x0;  // <-- 4
        a.x1s = b.x1;  // <-- 4
        return arc(b);  // <-- 5
    }

    return tween;  // <-- 6
}

function arcTweenText(a, i) {
    var oi = d3.interpolate({ x0: a.x0s, x1: a.x1s }, a);
    function tween(t) {
        var b = oi(t);
        return "translate(" + arc.centroid(b) + ")rotate(" + computeTextRotation(b) + ")";
    }
    return tween;
}
