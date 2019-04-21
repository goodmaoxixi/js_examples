var nodeData = { "name": "TOPICS", "children": [{
    "name": "Topic A",
    "children": [{"name": "Sub A1", "size": 4}, {"name": "Sub A2", "size": 4}]
  }, {
    "name": "Topic B",
    "children": [{"name": "Sub B1", "size": 3}, {"name": "Sub B2", "size": 3},
                 {"name": "Sub B3", "size": 3}]
  }, {
    "name": "Topic C",
    "children": [{"name": "Sub A1", "size": 4}, {"name": "Sub A2", "size": 4}]
  }]
};

// Initializes variables
var vWidth = 500;  // <-- 1
var vHeight = 500;
var vRadius = Math.min(vWidth, vHeight) / 2;  // < -- 2
var vColor = d3.scaleOrdinal(d3.schemeCategory20b);   // <-- 3

