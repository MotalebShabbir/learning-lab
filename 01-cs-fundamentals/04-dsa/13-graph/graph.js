class Graph {
  constructor() {
    this.adjList = {};
  }
  addVertex(vertex) {
    if (!this.adjList[vertex]) this.adjList[vertex] = [];
  }
  addEdge(vertex1, vertex2) {
    if (!this.adjList[vertex1]) {
      console.log(`${vertex1} is not found`);
      return false;
    }
    if (!this.adjList[vertex2]) {
      console.log(`${vertex2} is not found`);
      return false;
    }
    this.adjList[vertex1].push(vertex2);
    this.adjList[vertex2].push(vertex1);
  }
  removeEdge(vertex1, vertex2) {
    if (!this.adjList[vertex1] || !this.adjList[vertex2]) {
      console.log("vertex not found");
      return false;
    } else {
      this.adjList[vertex1] = this.adjList[vertex1].filter((v) => v != vertex2);
      this.adjList[vertex2] = this.adjList[vertex2].filter((v) => v != vertex1);
    }
  }
  removeVertex(vertex) {
    this.adjList[vertex].map((v) => {
      this.adjList[v] = this.adjList[v].filter((e) => e !== vertex);
    });
    delete this.adjList[vertex];
  }
}
// Usage
const g = new Graph();
g.addVertex("A");
g.addVertex("B");
g.addVertex("C");
g.addVertex("D");
g.addEdge("A", "C");
g.addEdge("B", "C");
g.addEdge("A", "B");
g.removeEdge("A", "B");
g.removeVertex("B");

console.log(g);
