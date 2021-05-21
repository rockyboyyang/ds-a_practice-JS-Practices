
// https://leetcode.com/problems/replace-all-digits-with-characters/

let alphabet = 'abcdefghijklmnopqrstuvwxyz'

var replaceDigits = function (s) {
    let len = s.length
    let str = ''
    for (let i = 0; i < len; i += 2) {
        let char = s[i]
        let numToShift = +s[i + 1]
        let idxOfChar = alphabet.indexOf(char)
        let newIdx = numToShift + idxOfChar
        // str += char + alphabet[newIdx]

        alphabet[newIdx] ? str += char + alphabet[newIdx] : str += char

    }

    return str

};