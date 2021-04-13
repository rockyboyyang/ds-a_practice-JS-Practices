/*

Object.assign() method has multiple jobs.  It can copy an object,
clone from another object, or concatenate two or more objects

*/


/* ***Copy the values from another object*** */

const myObj1 = {
    car: 'Lambo',
}

const myObj3 = {
    name: 'Rocky',
    age: 25,
    favoriteLanguage: 'JavaScript',
    sport: 'Soccer'
}

// Object.assign(myObj1, myObj3)
// console.log(myObj1) // {car: 'Lambo', name: 'Rocky', age: 25, favoriteLanguage: 'JavaScript'}





/* ***Clone an object to a new Object*** */

// const newObj = Object.assign({}, myObj3)
// console.log(newObj) // {name: 'Rocky', age: 25, favoriteLanguage: 'JavaScript'}



/* ***Merge Duplicate properties*** */

const myObj2 = {
    name: 'John',
    age: 23,
    favoriteLanguage: 'Python',
    car: 'Ford'
}

const newObj = Object.assign({}, myObj2, myObj3)
console.log(newObj)
