function binarySearch(array, target) {
    if (array.length === 0) {
        return false;
    }

    let midIdx = Math.floor(array.length / 2);
    let leftHalf = array.slice(0, midIdx);
    let rightHalf = array.slice(midIdx + 1);

    if(target < array[midIdx]) return binarySearch(leftHalf, target)
    else if(target > array[midIdx]) return binarySearch(rightHalf, target)
    else return true
}

li = [-4, 0, 1, 12, 14, 19, 21, 24, 30, 38, 51]

console.log(binarySearch(li, 12)) // True
console.log(binarySearch(li, 30)) // True
console.log(binarySearch(li, 3)) // False
console.log(binarySearch(li, 28)) // False