// https://leetcode.com/problems/single-row-keyboard/

// There is a special keyboard with all keys in a single row.

// Given a string keyboard of length 26 indicating the layout of the keyboard(indexed from 0 to 25).Initially, your finger is at index 0. To type a character, you have to move your finger to the index of the desired character.The time taken to move your finger from index i to index j is | i - j |.

// You want to type a string word.Write a function to calculate how much time it takes to type it with one finger.

/*
 Steps:
 - need a sum counter to track the total counts
 - need a counter to track current index
 - run a for loop on the word
 - find idx of char on keyboard,
 - add the abs val of idx of char - current idx
 - reassign current idx to idx of char
 - return sum
*/

let keyboard1 = "abcdefghijklmnopqrstuvwxyz"
let word1 = 'cba'

let keyboard2 = "pqrstuvwxyzabcdefghijklmno"
let word2 = 'leetcode'

var calculateTime = function (keyboard, word) {
    let sum = 0;
    let currentFingerIdx = 0;

    for(let char of word) {
        let idx = keyboard.indexOf(char)
        let numOfKeysMoved = Math.abs(idx - currentFingerIdx)
        sum += numOfKeysMoved
        currentFingerIdx = idx
    }

    return sum

};

// console.log(calculateTime(keyboard1, word1)) // => 4
console.log(calculateTime(keyboard2, word2)) // => 73