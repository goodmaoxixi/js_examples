var nodeData = {name: "TOPICS", children: [{
    name: "Topic A",
    children: [{name: "Sub A1", size: 4}, {name: "Sub A2", size: 4}]
  }, {
    name: "Topic B",
    children: [{name: "Sub B1", size: 3}, {name: "Sub B2", size: 3},
               {name: "Sub B3", size: 3}]
  }, {
    name: "Topic C",
    children: [{name: "Sub A1", size: 4}, {name: "Sub A2", size: 4}]
  }]
};

// Initializes variables
var width = 500;                                   // <-- 1
var height = 500;
var radius = Math.min(width, height) / 2;          // < -- 2
var color = d3.scaleOrdinal(d3.schemeCategory20b); // <-- 3

// Set up our SVG workspace
var g = d3.select('svg')  // <-- 1
    .attr('width', width) // <-- 2
    .attr('height', height)
    .append('g')          // <-- 3
    .attr('transform', 'translate(' + width / 2 + ',' + height / 2 + ')'); // <-- 4

// Format the Data
var partition = d3.partition()    // <-- 1
    .size([2 * Math.PI, radius]); // <-- 2

// Find the Root Node
var root = d3.hierarchy(nodeData) // <-- 1
    .sum(d => d.size);            // <-- 2

// Calculate each arc
partition(root);    // <-- 1, data binding
var arc = d3.arc()  // <-- 2
    .startAngle(d => d.x0)
    .endAngle(d => d.x1)
    .innerRadius(d => d.y0)
    .outerRadius(d => d.y1);

// Put it all together
g.selectAll('path')                                // <-- 1
    .data(root.descendants())                      // <-- 2
    .enter()                                       // <-- 3
    .append('path')                                // <-- 4
    .attr("display", d => d.depth ? null : "none") // <-- 5
    .attr("d", arc)                                // <-- 6
    .style('stroke', '#fff')                       // <-- 7
    .style("fill", d => color((d.children ? d : d.parent).data.name)); // <-- 8
