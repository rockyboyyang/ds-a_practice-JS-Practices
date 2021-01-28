function inOrderArray(root, inOrderArr = []) {
    // if(!root) return []
    // // root = d
    // inOrderArray(root.left, inOrderArr);
    // inOrderArr.push(...root.val);
    // inOrderArray(root.right, inOrderArr);
    
    // return inOrderArr

    if (!root) return [];

    return [
        ...inOrderArray(root.left),
        root.val,
        ...inOrderArray(root.right),
    ];
    
}

function postOrderArray(root, postOrderArr = []) {
    if (!root) return []

    postOrderArray(root.left, postOrderArr)
    postOrderArray(root.right, postOrderArr)
    postOrderArr.push(root.val)

    return postOrderArr

    // if (!root) return [];

    // return [
    //     ...postOrderArray(root.left),
    //     ...postOrderArray(root.right),
    //     root.val,
    // ];
}


module.exports = {
    inOrderArray,
    postOrderArray
};