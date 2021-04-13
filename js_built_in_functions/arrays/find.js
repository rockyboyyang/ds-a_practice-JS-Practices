/*

Array.find()

- Helps us to find an element in an Array.  It takes a callback function as an
argument.  The callback function provides more options to find and extract
complex data.

*/

let arr = [1,41,31,51,43,32,5,10]

// Finds first Even number
console.log(arr.find(num => num % 2 === 0)) // 32

const vowels = 'aeiou'
let arr2 = ['hey', 'what', 'it', 'no', 'shy', 'power', 'before', 'bye']

// finds first str with length >= 5
console.log(arr2.find(str => str.length >= 5)) // power

// finds first str that ends in a vowel
console.log(arr2.find(str => vowels.includes(str[str.length - 1]))) // no

// finds first str that ends in a vowel and greater/equal length to 5
console.log(arr2.find(str => str.length >= 5 && vowels.includes(str[str.length - 1]))) // before
