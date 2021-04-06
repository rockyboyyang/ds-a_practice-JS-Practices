// https://leetcode.com/problems/slowest-key/

var slowestKey = function (releaseTimes, keysPressed) {
    let priorNum = 0;
    let hash = {}
    let largestDuration = 0
    for(let i = 0; i < releaseTimes.length; i ++) {
        let num = releaseTimes[i]
        let duration = num - priorNum 
        priorNum = num
        let char = keysPressed[i]
        if((hash[duration] && char > hash[duration]) || !hash[duration]) hash[duration] = char
        if(duration > largestDuration) largestDuration = duration
    }

    return hash[largestDuration]

};
console.log(slowestKey([9, 29, 49, 50], 'cbcd')) // c
console.log(slowestKey([12, 23, 36, 46, 62], 'spuda')) // a
