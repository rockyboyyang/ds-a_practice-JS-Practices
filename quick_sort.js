


const input = [5,1,-1,4,10,-14,7,11]
// WITH FILTER METHOD
// const quickSort = (arr) => {
//     if(arr.length <= 1) return arr

//     let pivot = arr.shift();
//     // let left = arr.filter(el => el < pivot);
//     // let right = arr.filter(el => el >= pivot);

//     let left = []
//     let right = []

//     arr.forEach(el => {
//         if(el < pivot) left.push(el)
//         else if (el >= pivot) right.push(el)
//     })

//     let leftSorted = quickSort(left)
//     let rightSorted = quickSort(right)

//     return [...leftSorted, pivot, ...rightSorted]
// }

const quickSort = (arr) => {
    if(arr.length <= 1) return arr

    let pivot = arr.shift();
    let left = arr.filter(el => el < pivot)
    let right = arr.filter(el => el >= pivot)

    let leftSorted = quickSort(left)
    let rightSorted = quickSort(right)

    return [...leftSorted, pivot, ...rightSorted]
}

console.log(quickSort(input))