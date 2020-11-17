/*
Letter Combination of a phone number

https://leetcode.com/problems/letter-combinations-of-a-phone-number/

Given a string containing digits from 2-9 inclusive, return all possible letter combinations that the number could represent. Return the answer in any order.

A mapping of digit to letters (just like on the telephone buttons) is given below. Note that 1 does not map to any letters.

Input: digits = "23"
Output: ["ad","ae","af","bd","be","bf","cd","ce","cf"]

Input: ''
Output: []

Input: "2"
Output: ['a', 'b', 'c']
*/

// var letterCombinations = function (digits) {
//     // let obj = {
//     // '2': "abc",
//     // '3': "def",
//     // '4': "ghi",
//     // '5': "jkl",
//     // '6': "mno",
//     // '7': "pqrs",
//     // '8': "tuv",
//     // '9': "wxyz",
//     // }
//     let phoneNumObj = {
//         '2': ["a", "b", "c"],
//         '3': ["d", "e", "f"],
//         '4': ["g", "h", "i"],
//         '5': ["j", "k", "l"],
//         '6': ["m", "n", "o"],
//         '7': ["p", "q", "r", "s"],
//         '8': ["t", "u", "v"],
//         '9': ["w", "x", "y", "z"],
//     }

//     // digits = "23"

//     arrOfSets = []

//     for (let digit of digits) {
//         arrOfSets.push(phoneNumObj[digit]);
//     }

//     console.log(arrOfSets)
//     // arrOfSets = ["abc", "def"]
//     let len = digits.length
//     let i = 0;
//     let j = 0;
//     let k = 0;
//     let h = 0;

//     while (i < len && j < len && k < len && h < len) {

//     }

// };


const letterCombinations = (digits) => {
    if (digits == null || digits.length === 0) return [];

    const map = {
        2: 'abc',
        3: 'def',
        4: 'ghi',
        5: 'jkl',
        6: 'mno',
        7: 'pqrs',
        8: 'tuv',
        9: 'wxyz',
    };

    const res = [];
    const go = (i, s) => {
        if (i === digits.length) {
            res.push(s);
            return;
        }

        for (const c of map[digits[i]]) {
            go(i + 1, s + c);
        }
    };

    go(0, '');
    return res;
};

console.log(letterCombinations('23'))
console.log(!''.length)