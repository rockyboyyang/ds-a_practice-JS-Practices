/*
Bubble Sort is generally the first major sorting algorithm to come up in most introductory
programming courses.  Leraning about this algorithm is useful educationally, as it provides
a good introduction to the challenges you face when tasked with converting unsorted data
into sorted data, such as conducting logical comparisons, making swaps while iterating, and
making optimizations.  It is also quite simple to implement, and can be done quickly.

Bubble Sort is almost never a good choice in production. simply because:

It is not efficient
It is not commonly used
There is a stigma attached to using it
O(n^2)
*/

const swap = (arr, idx1, idx2) => {
    [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]]

}
const bubbleSort = (arr) => {
    let len = arr.length;
    let swapped = true;

    while(swapped) {
        swapped = false;
        for(let i = 0; i < len - 1; i++) {
            if(arr[i] > arr[i+1]) {
                swap(arr, i, i + 1)
                swapped = true;
            }
        }
    }

    return arr;
}
console.log(bubbleSort([1,2,5,3, -3,10,9]))