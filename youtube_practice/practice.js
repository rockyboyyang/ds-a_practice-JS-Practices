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
    console.log(element)
}

console.log(ids.has(1))

ids.delete(1)
console.log(ids)
