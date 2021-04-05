/*
Approach
1. loop throught the arary
2. Have a hash table to track the frequencies of the nums
3. loop through hash and check if num freq is greater than 1, then don't do it, otherwise compare to regular varaible
*/

const largestUniqueNumber = (arr) => {
    let largestNum = -1
    let numFreq = {}

    for(let num of arr) {
        if(numFreq[num]) numFreq[num] ++ 
        else numFreq[num] = 1
    }

    for(let num in numFreq) {
        let parsedNum = parseInt(num)
        if(numFreq[num] === 1 && parsedNum > largestNum) largestNum = parsedNum
    }

    return largestNum

}

console.log(largestUniqueNumber([5, 7, 3, 9, 4, 9, 8, 3, 1]))
console.log(largestUniqueNumber([9, 9, 8, 8]))