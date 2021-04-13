let arr1 = ['hey', 'what', 'it', 'no', 'shy', 'power', 'before', 'bye', 'power']

// findIndex is same as indexOf

console.log(arr1.indexOf('power')) // 5
console.log(arr1.findIndex(str => str === 'power')) // 5



/*

When using entries(), you can iterate through it and get the val of an arr of the 
idx and element

*/
const iterator = arr1.entries();


for(const val of iterator) {
    console.log(val)
}
