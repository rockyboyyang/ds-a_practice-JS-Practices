// View the full problem and run the test cases at:
//  https://leetcode.com/problems/balanced-binary-tree/

/*
Approach:

*/
// root level, left is 1, right is 2
function isBalanced(root, currentLevel = 0) {
    if(!root) return 0
    let leftHeight = isBalanced(root.left, currentLevel + 1) + 1 
    let rightHeight = isBalanced(root.right, currentLevel + 1) + 1

    if(currentLevel === 0) return Math.abs(leftHeight - rightHeight) <= 1
    else {
        if(leftHeight > rightHeight) return leftHeight
        else return rightHeight
    }
}