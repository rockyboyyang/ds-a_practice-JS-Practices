
// https://leetcode.com/problems/find-k-length-substrings-with-no-repeated-characters/


const hasRepeatedChars = function (string) {
    let h = {}
    for (let char of string) {
        if (h[char]) return false
        else h[char] = true
    }
    return true
}

const numKLenSubstrNoRepeats = function (S, K) {
    let count = 0;
    let len = S.length
    for (let i = 0; i <= len - K; i++) {
        let subStr = S.slice(i, i + K)
        if (hasRepeatedChars(subStr)) count++
    }

    return count

};

let S = "havefunonleetcode", K = 5

console.log(numKLenSubstrNoRepeats(S, K)) // => 6