// https://leetcode.com/problems/majority-element/


var majorityElement = function (nums) {
    let len = nums.length
    let half = len / 2
    let hash = {}

    for(let num of nums) {
        if(hash[num]) hash[num] ++
        else hash[num] = 1
        if(hash[num] > half) return num
    }
    
};