// class TreeNode {
//     constructor(val) {
//         this.val = val;
//         this.left = null;
//         this.right = null;
//     }
// }

// let a = new TreeNode('a');
// let b = new TreeNode('b');
// let c = new TreeNode('c');
// let d = new TreeNode('d');
// let e = new TreeNode('e');
// let f = new TreeNode('f');

// a.left = b;
// a.right = c;
// b.left = d;
// b.right = e;
// c.right = f;

function depthFirstSearch(root, targetVal) {
    // initialize the stack with the root node
    let stack = [ root ]

    // continue running the algorithm while there are still node on the stack
    while(stack.length) {

        // pop the top node from the stack
        let node = stack.pop(); 

        // we consider a node visited once we pop it,
        // so we should check condition and return if val === targetValue
        if(targetVal === node.val) return node

        // add the node's left and right children, if they exist
        if (node.right) stack.push(node.right)
        if (node.left) stack.push(node.left)
    }

    // If the loop ends, it must mean that there wasn't a match, so return null
    return null
}

// depthFirstSearch(a)

// let a = new TreeNode('a');
// let b = new TreeNode('b');
// let c = new TreeNode('c');
// let d = new TreeNode('d');
// let e = new TreeNode('e');
// let f = new TreeNode('f');
// a.left = b;
// a.right = c;
// b.left = d;
// b.right = e;
// c.right = f;


module.exports = {
    depthFirstSearch
};