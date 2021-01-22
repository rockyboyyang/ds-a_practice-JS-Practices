// const { mergeDefaults } = require("sequelize/types/lib/utils")

function merge(array1, array2) {
    let finArr = []

    while(array1.length || array2.length) {
        let ele1 = array1.length ? array1[0] : Infinity
        let ele2 = array2.length ? array2[0] : Infinity

        let next = ele1 < ele2 ? array1.shift() : array2.shift()
        finArr.push(next)
    }

    return finArr
}

function mergeSort(array) {
    if(array.length <= 1) return array

    let midIdx = Math.floor(array.length / 2);
    let leftHalf = array.slice(0, midIdx)
    let rightHalf = array.slice(midIdx)

    let sortedLeft = mergeSort(leftHalf)
    let sortedRight = mergeSort(rightHalf)

    return merge(sortedLeft, sortedRight)
}

console.log(mergeSort([123, 32, 12, 41, 0, -23, 1, -123, 57, 0.3, 76, 2, 0, -20]))

module.exports = {
    merge,
    mergeSort
};