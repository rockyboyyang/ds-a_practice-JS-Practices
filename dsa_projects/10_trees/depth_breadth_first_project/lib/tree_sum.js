function treeSum(root) {
    let sum = 0
    if(!root) return sum
    
    // DFS
    // let stack = [ root ]
    // while(stack.length) {
    //     let node = stack.pop()
    //     sum += node.val
    //     if (node.right) stack.push(node.right)
    //     if (node.left) stack.push(node.left)
    // }

    // return sum

    // BFS
    let queue = [ root ]
    while(queue.length) {
        let node = queue.shift()
        sum += node.val
        if (node.left) queue.push(node.left)
        if (node.right) queue.push(node.right)
    }

    return sum

}


module.exports = {
    treeSum
};