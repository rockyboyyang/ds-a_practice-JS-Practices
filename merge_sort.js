/*

MERGE SORT

We're going to need a helper function that solves the first major point from above.  

The algorithm for merge sort is actually really simple.

1.  If there is only one element int he list, it is already sorted.  Return that Array

2. otherwise, divide the list recursively into two halves until it can no more be divided.

3. merge the smaller lists into new list in sorted order.


*/

// function merge(array1, array2) {
//     let merged = [];

//     while(array1.length || array2.length) {
//         let ele1 = array1.length ? array1[0] : Infinity;
//         let ele2 = array2.length ? array2[0] : Infinity;

//         let next;
//         if(ele1 < ele2) {
//             next = array1.shift();
//         } else {
//             next = array2.shift();
//         }

//         merged.push(next)
//     }

//     return merged
// }

// function mergeSort(array) {
//     if(array.length <= 1) return array;

//     let midIdx = Math.floor(array.length / 2);
//     let leftHalf = array.slice(0, midIdx);
//     let rightHalf = array.slice(midIdx);

//     let sortedLeft = (mergeSort(leftHalf));
//     let sortedRight = (mergeSort(rightHalf));

//     return merge(sortedLeft, sortedRight)
// }

const merge = (arr1, arr2) => {
    let merged = [];

    while(arr1.length || arr2.length) {
        let next;
        let arr1FirstEle = arr1.length ? arr1[0] : Infinity
        let arr2FirstEle = arr2.length ? arr2[0] : Infinity

        if(arr1FirstEle > arr2FirstEle) next = arr2.shift()
        else next = arr1.shift()

        merged.push(next)
    }

    return merged
}

const mergeSort = (array) => {
    if(array.length <= 1) return array
    
    const midIdx = Math.floor(array.length / 2)

    const leftArr = array.slice(0, midIdx)
    const rightArr = array.slice(midIdx)

    const leftMerge = mergeSort(leftArr)
    const rightMerge = mergeSort(rightArr)

    return merge(leftMerge, rightMerge)
}

console.log(mergeSort([10, -2, 1, 0, -14, 4, 9, 6, 14, -40, 43, 41, -21]))
// console.log(merge([1,3,5,7,9], [2,4,6,8,10]))
