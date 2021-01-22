function binarySearch(array, target) {
    if(array.length === 0) return false

    let midIdx = Math.floor(array.length / 2) 
    let leftHalf = array.slice(0, midIdx)
    let rightHalf = array.slice(midIdx + 1)

    if(target < array[midIdx]) return binarySearch(leftHalf, target)
    else if(target > array[midIdx]) return binarySearch(rightHalf, target)
    else return true
}

function binarySearchIndex(array, target) {
    if (!array.length) return -1

    let midIdx = Math.floor(array.length / 2)
    let leftHalf = array.slice(0, midIdx)
    let rightHalf = array.slice(midIdx + 1)

    if (target < array[midIdx]) return binarySearchIndex(leftHalf, target)
    else if (target > array[midIdx]) return binarySearchIndex(rightHalf, target)
    else return midIdx
}

let arr1 = [-4, ,0, 1, 3, 8 , 12, 20, 25, 32, 64, 190, 299]

console.log(binarySearchIndex(arr1, 13))
console.log(binarySearchIndex(arr1, 299))

module.exports = {
    binarySearch,
    binarySearchIndex
};