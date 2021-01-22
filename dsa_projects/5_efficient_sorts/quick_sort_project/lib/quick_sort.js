function quickSort(array) {
    let len = array.length
    if(len <= 1) return array

    let pivot = array.shift()

    let lessThanArr = array.filter(ele => ele < pivot)
    let greaterThanArr = array.filter(ele => ele >= pivot)

    let leftArr = quickSort(lessThanArr)
    let rightArr = quickSort(greaterThanArr)

    return [...leftArr, pivot, ...rightArr]
}

console.log(quickSort([123, 32, 12, 41, 0, -23, 1, -123, 57, 0.3, 76, 2, 0, -20]))

module.exports = {
    quickSort
};