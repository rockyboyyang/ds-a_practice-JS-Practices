/*
Let's create several functions that return Promises
and look at promise chaining

*/

// Simulate fetching some data
let fetchData = function(data) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('Processing Data Complete');
            resolve({id: 1, message: 'Nice work'});
        }, 2000);
    });
}

// Parse the data
let parseData = function(data) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let parsedOutput = `Parsed the data for id: ${data.id} with message: ${data.message}`;
            resolve({ parsed: parsedOutput });
        }, 2000);
    })
}

// Echo the data
let echoData = function(data) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log(data.parsed);
        }, 2000);
    })
}

fetchData().then(parseData).then(echoData)