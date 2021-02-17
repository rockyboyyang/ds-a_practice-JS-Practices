// How to create a promise?
// const promise = new Promise()

// How to full fill or reject the promise?
// const promise = new Promise(() => {

// })

// let isTacos = false

// const onFullfillment = (result) => {
//     console.log(result)
//     console.log('Set up the table to eat tacos!')
// }

// const onRejection = (reject) => {
//     console.log(reject)
//     console.log('Start cooking pasta!')
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
// })

// promise
//     .then(onFullfillment)
//     .catch(onRejection)
