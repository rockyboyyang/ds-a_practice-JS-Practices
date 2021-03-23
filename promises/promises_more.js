// // How to create a promise?
// // const promise = new Promise()

// // How to full fill or reject the promise?
// // const promise = new Promise(() => {

// // })

// let isTacos = false

// const onFullfillment = (result) => {
//     console.log(result)
//     console.log('Set up the table to eat tacos!')
// }

// const onRejection = (reject) => {
//     console.log(reject)
//     console.log('Start cooking pasta!')
// }

// const onFinally = () => {
//     console.log('promise over')
// }

// const promise = new Promise((resolve, reject) => {
//     if(isTacos) {
//         setTimeout(() => {
//             resolve('Bringing Tacos')
//         }, 3000)
//     }
//     else {
//         setTimeout(() => {
//             reject('Sorry, no tacos!')   
//         }, 3000)
//     }
//     // resolve('Bringing Tacos')
//     // reject('Sorry, no tacos!')

// })

// promise
//     .then(onFullfillment)
//     .catch(onRejection)
//     .finally(onFinally)

// // onFullfillment()

// // let firstFunction = function() {
// //     return new Promise((resolve, reject) => {
// //         resolve('Your cat is ')
// //     })
// // }

// // firstFunction().then(res => console.log(res))

// function isAnagram(str1, str2) {
//     let str1Len = str1.length
//     let str2Len = str2.length
//     if(str1Len !== str2Len) return false
//     let charFreq = {}

//     for(let char of str1) {
//         if(charFreq[char]) charFreq[char] ++
//         else charFreq[char] = 1
//     }

//     for(let char of str2) {
//         if (charFreq[char]) charFreq[char]--
//         else return false
//     }

//     return true

// }

// console.log(isAnagram('abcde', 'decab')) // true
// console.log(isAnagram('abcde', 'deceb')) // false
// console.log(isAnagram('rhinos', 'sorhin')) // true
// console.log(isAnagram('abcde', 'abc')) // false