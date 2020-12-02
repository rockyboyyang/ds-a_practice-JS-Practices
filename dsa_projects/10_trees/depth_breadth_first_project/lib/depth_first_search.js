function depthFirstSearch(root, targetVal, found = null) {
    // console.log("found", found);
    if (!root) return// base case
    if (root.val === targetVal) {
        found = root
        return
    }

    depthFirstSearch(root.left, targetVal, found);
    depthFirstSearch(root.right, targetVal, found);
    
    return found
}

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