// adjacency list for an undirected, unweighted graph, implemented with a hash table
console.clear();

class Graph {
  constructor() {
    this.numNodes = 0;
    this.adjacentList = {};
  }

  addVertex(node) {
    if (this.adjacentList[node]) {
      return false;
    }

    this.adjacentList[node] = [];
    this.numNodes++;

    return this.numNodes;
  }

  addEdge (node1, node2) {
    if (!this.adjacentList[node1] || !this.adjacentList[node2]) return false;
    
    this.adjacentList[node1].push(node2);
    this.adjacentList[node2].push(node1);

    return [node1, node2];
  }

  showConnections() { 
    const nodeList = Object.keys(this.adjacentList);
    
    for (const node of nodeList) {
      let connectionString = `${node} --> `;

      for (const connectedNode in this.adjacentList[node]) {
        connectionString += `${this.adjacentList[node][connectedNode]} `;
      }

      console.log(connectionString);
    }
  }
}

const myGraph = new Graph();

myGraph.addVertex('0');
myGraph.addVertex('1');
myGraph.addVertex('2');
myGraph.addVertex('3');
myGraph.addVertex('4');
myGraph.addVertex('5');
myGraph.addVertex('6');
myGraph.addEdge('3', '1'); 
myGraph.addEdge('3', '4'); 
myGraph.addEdge('4', '2'); 
myGraph.addEdge('4', '5'); 
myGraph.addEdge('1', '2'); 
myGraph.addEdge('1', '0'); 
myGraph.addEdge('0', '2'); 
myGraph.addEdge('6', '5');

myGraph.showConnections();