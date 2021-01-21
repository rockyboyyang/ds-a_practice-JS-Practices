// MEMOIZATION

// Runtime: O(n)

// let memo = {}

// function factorial(n) {
//     // if(n in memo) return memo[n]
//     if(n === 1) return 1

//     let answer = n * factorial(n - 1);
//     // memo[n] = answer
//     return answer
// }

// console.log(factorial(100))
// console.log(memo)

function fib(n, memo = {}) {
    if(n in memo) return memo[n]
    if (n === 1 || n === 2) return 1


    memo[n] = fib(n - 1, memo) + fib(n - 2, memo)
    return memo[n]
}

console.log(fib(50))