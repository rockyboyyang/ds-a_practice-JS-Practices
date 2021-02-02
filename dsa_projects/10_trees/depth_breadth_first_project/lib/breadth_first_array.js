function breadthFirstArray(root) {
    let arr = [] // [ a, b, c, d]
    let queue = [ root ]; // [ d, e, f]
    while(queue.length) {
        let node = queue.shift() // d

        arr.push(node.val);

        if (node.left) queue.push(node.left)
        if (node.right) queue.push(node.right)
    }

    return arr
}

module.exports = {
    breadthFirstArray
};