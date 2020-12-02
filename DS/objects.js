const person = { firstName: 'Max', age: 31, hobbies: ['Sports', 'Cooking'] };

console.log(person)

function depthFirstSearch(root, targetVal, found = null) {
    // console.log("found", found);
    if (!root) return // base case
    if (root.val === targetVal && found === null) found = root;

    depthFirstSearch(root.left, targetVal, found);
    depthFirstSearch(root.right, targetVal, found);
    return found
}