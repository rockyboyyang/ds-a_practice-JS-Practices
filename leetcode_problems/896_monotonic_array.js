// https://leetcode.com/problems/monotonic-array/

/*
An array is monotonic if it is either monotone increasing or monotone decreasing.

An array A is monotone increasing if for all i <= j, A[i] <= A[j].  An array A is monotone decreasing if for all i <= j, A[i] >= A[j].

Return true if and only if the given array A is monotonic.

*/

var isMonotonic = function (A) {
    let isIncreasing = false
    let isDecreasing = false
    let len = A.length
    for(let i = 0; i < len - 1; i++) {
        let num = A[i]
        let nextNum = A[i + 1]
        if(num > nextNum) isDecreasing = true
        else if(num < nextNum) isIncreasing = true
    }

    if(isIncreasing && isDecreasing) return false
    else return true
};

console.log(isMonotonic([1, 2, 2, 3])) // true
console.log(isMonotonic([6, 5, 4, 4])) // true
console.log(isMonotonic([1, 3, 2])) // false
console.log(isMonotonic([1, 2, 4, 5])) // true