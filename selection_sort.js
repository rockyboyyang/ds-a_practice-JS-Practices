/*
Selection Sort is very similar to Bubble Sort.  The major difference between the two
is that Bubble Sort bubbles the largest elements up to the end of the array,
while selection sort selects the smallest elements of the array and directly places 
them at the beginning of the array in sorted position.  Selection sort will
utilize swapping just as bubble sort did.  Let's carefully break this sorting
algorithm down.


*/

const swap = (arr, idx1, idx2) => {
    [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]]
}
// const selectionSort = (arr) => {
//     let len = arr.length;
//     for(let i = 0; i < len; i++) {
//         let minIdx = i;

//         for(let j = i + 1; j < len; j++) {
//             if(arr[minIdx] > arr[j]) minIdx = j;
//         }
//         swap(arr, i, minIdx)
//     }
//     return arr
// }

const selectionSort = (arr) => {
    let len = arr.length

    for(let i = 0; i < len; i++) {
        let minIdx = i;
        for(let j = i + 1; j < len; j++) {
            if(arr[minIdx] > arr[j]) minIdx = j
        }
        
        swap(arr, i, minIdx)
    }
    return arr
}

console.log(selectionSort([9,41,2,13,43,7,5,-12, 50, 32]))