// View the full problem and run the test cases at:
//  https://leetcode.com/problems/convert-sorted-array-to-binary-search-tree/

const { TreeNode } = require("./bst")


function sortedArrayToBST(nums) {
    let len = nums.length
    if(!len) return null

    let midIdx = Math.floor(len / 2)
    let root = new TreeNode(nums[midIdx])
    
    let leftSubtree = sortedArrayToBST(nums.slice(0, midIdx))
    let rightSubtree = sortedArrayToBST(nums.slice(midIdx + 1))

    root.left = leftSubtree
    root.right = rightSubtree

    return root

}