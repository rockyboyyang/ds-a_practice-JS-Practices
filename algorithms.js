/*

An Algorithm is a sequence of steps (instructions) to solve a clearly defined problem.

*/

// Linear O(n)
// function sumUp(n) {
//     let res = 0;
//     for(let i = 1; i <= n; i++) {
//         res += i;
//     }
//     return res
// }
// console.log(sumUp(10000000000))

// Constant O(1)
// function sumUp(n) {
//     return (n/2) * (1 + n)
// }

// console.log(sumUp(13))

// var removeDuplicateLetters = function (s) {
//     let charVal = {
//         a: { val: 1, appear: 0 },
//         b: { val: 2, appear: 0 },
//         c: { val: 3, appear: 0 },
//         d: { val: 4, appear: 0 },
//         e: { val: 5, appear: 0 },
//         f: { val: 6, appear: 0 },
//         g: { val: 7, appear: 0 },
//         h: { val: 8, appear: 0 },
//         i: { val: 9, appear: 0 },
//         j: { val: 10, appear: 0 },
//         k: { val: 11, appear: 0 },
//         l: { val: 12, appear: 0 },
//         m: { val: 13, appear: 0 },
//         n: { val: 14, appear: 0 },
//         o: { val: 15, appear: 0 },
//         p: { val: 16, appear: 0 },
//         q: { val: 17, appear: 0 },
//         r: { val: 18, appear: 0 },
//         s: { val: 19, appear: 0 },
//         t: { val: 20, appear: 0 },
//         u: { val: 21, appear: 0 },
//         v: { val: 22, appear: 0 },
//         w: { val: 23, appear: 0 },
//         x: { val: 24, appear: 0 },
//         y: { val: 25, appear: 0 },
//         z: { val: 26, appear: 0 },
//     }

//     let length = s.length;
//     let copy = s
//     let startingChar = s[0];
//     for (char of s) {
//         if (charVal[char].val < charVal[startingChar].val) startingChar = char
//         charVal[char].appear++;
//     }

//     for (let i = 0; i < length - 1; i++) {
//         if (copy[i] === startingChar) break;
//         if (charVal[copy[i]].appear > 1) {
//             charVal[copy[i]].appear --
//             copy = copy.slice(i + 1)
//             i--
//         }
//     }

//     for (let i = copy.length - 1; i >= 0; i--) {
//         if (charVal[copy[i]].appear > 1) {
//             charVal[copy[i]].appear --
//             copy = copy.slice(0, i) + copy.slice(i + 1)
//         }
//     }

//     return copy;
// };

// removeDuplicateLetters("bcabc")
// removeDuplicateLetters("cbacdcbc")
