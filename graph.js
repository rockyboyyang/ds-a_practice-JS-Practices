// GraphNode
class GraphNode {
    constructor(val) {
        this.val = val
        this.neighbors = []
    }
}

let a = new GraphNode('a')
let b = new GraphNode('b')
let c = new GraphNode('c')
let d = new GraphNode('d')
let e = new GraphNode('e')
let f = new GraphNode('f')
a.neighbors = [b, c, e];
c.neighbors = [b,d];
e.neighbors = [a];
f.neighbors = [e];

function graphNodeDepthFirstRecur(node, visited=new Set()) {
    // if this node has already been visited, then return early, otherwise will cause in infinate loop
    if(visited.has(node.val)) return;

    // otherwise it hasn't yet been visited,
    // so print its val and mark it as visited.
    // console.log(node.val);
    visited.add(node.val);

    // then explore each of its neighbors
    node.neighbors.forEach(neighbor => {
        depthFirstRecur(neighbor, visited)
    });
    return visited
}

function graphNodeDepthFirstIter(node) {
    let visited = new Set();
    let stack = [node]

    while(stack.length) {
        let node = stack.pop();

        // if this node has already been visited, then skip this node
        if(visited.has(node.val)) continue;

        // otherwise it hasn't yet been visited,
        // so print it's val and mark it as visited.
        console.log(node.val);
        visited.add(node.val);

        // then add its neighbors to the stack to be explored
        stack.push(...node.neighbors)
    }
}

console.log(graphNodeDepthFirstRecur(c))
graphNodeDepthFirstIter(f)

// Adjacency List
let graph = {
    a: ['b', 'c', 'e'],
    b: [],
    c: ['b', 'd'],
    d: [],
    e: ['a'],
    f: ['e'],
}

// console.log(graph)