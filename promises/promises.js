// let p = new Promise((resolve, reject) => {
//     let a = 1 + 1
//     if (a === 2) {
//         resolve('Success')
//     } else {
//         reject('Failed')
//     }
// })

// // console.log(p)

// p.then((message) => {
//     console.log('This is in the then: ' + message)
// }).catch(message => {
//     console.log('This is in the catch: ' + message)
// })



// CALLBACKS

// const userLeft = false
// const userWatchingCatMeme = false

// function watchTutorialCallback(callback, errorCallback) {
//     if (userLeft) {
//         errorCallback({
//             name: 'User Left',
//             message: ':('
//         })
//     } else if (userWatchingCatMeme) {
//         errorCallback({
//             name: 'User Watching Cat Meme',
//             message: 'WebDevSimplified < Cat'
//         })
//     } else {
//         callback('Thumbs up and Subscribe')
//     }
// }

// watchTutorialCallback((message) => {
//     console.log('Success: ' + message)
// }, (error) => {
//     console.log(error.name + ' ' + error.message)
// })


// function watchTutorialPromises() {
//     return new Promise((res, rej) => {
//         if (userLeft) {
//             rej({
//                 name: 'User Left',
//                 message: ':('
//             })
//         } else if (userWatchingCatMeme) {
//             rej({
//                 name: 'User Watching Cat Meme',
//                 message: 'WebDevSimplified < Cat'
//             })
//         } else {
//             res('Thumbs up and Subscribe')
//         }
//     })
// }

// watchTutorialPromises().then((message) => {
//     console.log('This is in the then: ' + message)
// }).catch(message => {
//     console.log('This is in the catch: ' + message.name + ' ' + message.message)
// })


// const recordVideoOne = new Promise((resolve, reject) => {
//     resolve('Video 1 Recorded')
// })

// const recordVideoTwo = new Promise((resolve, reject) => {
//     resolve('Video 2 Recorded')
// })

// const recordVideoThree = new Promise((resolve, reject) => {
//     resolve('Video 3 Recorded')
// })


// // .all runs all promises at the same time

// // .race returns the first promise that is completes

// Promise.race([
//     recordVideoOne,
//     recordVideoTwo,
//     recordVideoThree
// ]).then((messages) => {
//     console.log(messages) // [ 'Video 1 Recorded', 'Video 2 Recorded', 'Video 3 Recorded' ]
// })



// function job() {
//     return new Promise(function (resolve, reject) {
//         // resolve()
//         reject();
//     });
// }

// let promise = job();

// promise

//     .then(function () {
//         console.log('Success 1');
//     })

//     .then(function () {
//         console.log('Success 2');
//     })

//     .then(function () {
//         console.log('Success 3');
//     })

//     .catch(function () {
//         console.log('Error 1');
//     })

//     .then(function () {
//         console.log('Success 4');
//     })

let allGood = true;

let fetchSomeData = new Promise((res, rej) => {
    if(allGood) {
        res({
            id: 1,
            message: 'nice work!'
        })
    } else {
        rej("error fetching data!")
    }
})

// Consuming a Promise
fetchSomeData.then(fetchedData => {
    console.log('then:', fetchedData)
}).catch(err => {
    console.error('catch:', err)
})