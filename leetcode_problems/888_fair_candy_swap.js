/*
Alice and Bob have candy bars of different sizes: A[i] is the size of the 
i-th bar of candy that Alice has, and B[j] is the size of the j-th bar of candy that Bob has.

Since they are friends, they would like to exchange one candy bar each so 
that after the exchange, they both have the same total amount of candy.  
(The total amount of candy a person has is the sum of the sizes of candy bars they have.)

Return an integer array ans where ans[0] is the size of the candy bar 
that Alice must exchange, and ans[1] is the size of the candy bar that Bob must exchange.

If there are multiple answers, you may return any one of them.  
It is guaranteed an answer exists.


Input: A = [1,1], B = [2,2]
Output: [1,2]

Input: A = [1,2], B = [2,3]
Output: [1,2]

Input: A = [2], B = [1,3]
Output: [2,3]

Input: A = [1,2,5], B = [2,4]
Output: [5,4]

*/

function sumArr(arr) {
    let sum = 0;
    for(let num of arr) {
        sum += num
    }

    return sum
}

function fairCandySwap(A, B) {
    // let sumA = sumArr(A) // 3
    // let sumB = sumArr(B) // 5
    // let [initA, initB] = [sumA, sumB]

    // for(let i = 0; i < A.length; i++) {
    //     for(let j = 0; j < B.length; j++) {
    //         let numA = A[i]
    //         let numB = B[j]

    //         sumA -= numA
    //         sumA += numB
    //         sumB -= numB
    //         sumB += numA
    //         if(sumA === sumB) return [numA, numB]
    //         else [sumA, sumB] = [initA, initB]
    //     }
    // }
    let sumA = sumArr(A) // 2
    let sumB = sumArr(B) // 4
    let setB = new Set(B) // {2, 2}
    // [1,1], [2,2]
    for(let num of A) {
        let num2 = (sumB - sumA) / 2 // 1
        if(setB.has(num + num2)) return [num, num2 + num]
    }
}

console.log(fairCandySwap([1,1], [2,2])) // [1, 2]
console.log(fairCandySwap([1,2], [2,3])) // [1, 2]
console.log(fairCandySwap([2], [1, 3])) // [2, 3]
console.log(fairCandySwap([1,2,5], [2,4])) // [5, 4]