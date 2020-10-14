/*
SETS

Methods:
Set.add()
Set.has()
Set.delete()

ARRAYS VS SETS

Arrays: 
- You can always use arrays
- Must use if order matters and/or duplicates are wanted

Sets:
- Only usable if order doesn't matter and only need unique values
- Can simplify data access(e.g. finding, deletion) compared to arrays

*/
const ids = new Set([1,2,3,4,4,4,4,4])

ids.add('hello')
ids.add(14)


for(const element of ids) {
    // console.log(element)
}

// console.log(ids.has(1))

ids.delete(1)
// console.log(ids)

/*
MAPS
- Ordered key-value pairs of data
- Element access via key
- iterable(= you can use the for-of loop )
- keys are unique, values are not
- keys can be anything (incl. reference values like arrays)
- Pure data storage, optimized for data access
*/

let map = new Map()

map.set('average', 1.53)
map.set('lastResult', null)

const country = {name: 'USA', population: 82};
map.set(country, 0.89)
// console.log(map)

for(const el of map) {
    // console.log(el)
}

map.set('average', 10)
// console.log(map.get('average'))
map.delete(country)
console.log(map)
