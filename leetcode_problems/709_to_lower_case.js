// https://leetcode.com/problems/to-lower-case/

// var toLowerCase = function(s) {
//     return s.toLowerCase()
// };

// Without toLowerCase() Built-in function

let alphabetLower = 'abcdefghijklmnopqrstuvwxyz'
let alphabetUpper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'

var toLowerCase = function (s) {

    let str = ''

    for (let char of s) {
        let idx = alphabetUpper.indexOf(char)
        if (idx > -1) str += alphabetLower[idx]
        else str += char
    }

    return str

}