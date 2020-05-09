const Graph = require("./index");
// Using the above implemented graph class
var g = new Graph(6);
var vertices = ["A", "B", "C", "D", "E", "F"];

// adding vertices
for (var i = 0; i < vertices.length; i++) {
  g.addVertex(vertices[i]);
}

// adding edges
g.addEdge("A", "B");
g.addEdge("A", "D");
g.addEdge("A", "E");
g.addEdge("B", "C");
g.addEdge("D", "E");
g.addEdge("E", "F");
g.addEdge("E", "C");
g.addEdge("C", "F");

// prints all vertex and
// its adjacency list
// A -> B D E
// B -> A C
// C -> B E F
// D -> A E
// E -> A D F C
// F -> E C
console.log("---START Print Graph---");
g.printGraph();
console.log("---END Print Graph---");

// prints
// BFS
// A B D E C F
console.log("---START Print BFS---");
g.bfs("A");
console.log("---END Print BFS---");

// prints
// DFS
// A B C E D F
console.log("---START Print DFS---");
g.dfs("A");
console.log("---END Print DFS---");
