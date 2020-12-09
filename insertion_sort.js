/*
INSERTION SORT

Insertion Sort is similar to Selection Sort in that it gradually builds up a larger
and larger sorted region at the left-most end of the array.

However, Insertion Sort differs from Selection Sort because this algorithm does not focus
on searching for the right element to place (the next smallest in our Selection Sort) on each
pass through the array.  Instead, it focuses on sorting each element in the order they appear
from left to right, regardless of their value, and inserting them in the most appropriate
position in the sorted region.
*/



// const swap = (arr, idx1, idx2) => {
//     [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]]
// }

function insertionSort(arr) {
    let len = arr.length;
    for(let i = 1; i < len; i++) {

    }
}

let arr = [9, 41, 2, 13, 43, 7, 5, -12, 50, 32];
console.log(insertionSort(arr))