//https://leetcode.com/problems/third-maximum-number/

var thirdMax = function (nums) {
    nums.sort((a, b) => b - a)
    let max = Infinity
    let count = 0
    for (let num of nums) {
        if (num < max) {
            max = num
            count++
            if (count === 3) return max
        }
    }

    return nums[0]

};