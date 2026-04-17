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
  bfs(start) {
    const result = [];
    if (!this.adjList[start]) return result;
    const visited = new Set([start]);
    const queue = [start];
    while (queue.length > 0) {
      const vertex = queue.shift();
      result.push(vertex);
      for (let neighbour of this.adjList[vertex]) {
        if (!visited.has(neighbour)) {
          visited.add(neighbour);
          queue.push(neighbour);
        }
      }
    }
    return result;
  }
}
// Usage
const g = new Graph();
g.addVertex("A");
g.addVertex("B");
g.addVertex("C");
g.addVertex("D");
g.addVertex("E");
g.addEdge("A", "B");
g.addEdge("A", "C");
g.addEdge("B", "D");
g.addEdge("C", "D");
g.addEdge("D", "E");

console.log(g.bfs("A")); // ["A", "B", "C", "D", "E"]

//console.log(g);
