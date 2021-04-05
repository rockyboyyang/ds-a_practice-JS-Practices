/*
Given a string containing just the characters '(' and ')', find the length of the longest valid (well-formed) parentheses substring.

Input: s = "(()"
Output: 2
Explanation: The longest valid parentheses substring is "()".

Input: s = ")()())"
Output: 4
Explanation: The longest valid parentheses substring is "()()".

Input: s = ""
Output: 0

Input: s = "((()))"
Output: 6

Approach:
1. Stack
push closing onto stack
pop stack if opening when stack has length
*/

const longestValidParentheses = (s) => {
    let stack = [-1] 
    let count = 0 
    for(let i = 0; i < s.length; i++) {
        let char = s[i]
        if(char === '(') stack.push(i)
        else {
            stack.pop() // 
            if(!stack.length) stack.push(i);
            else count = Math.max(count, i - stack[stack.length - 1])
        }
    }

    return count

}

console.log(longestValidParentheses('(()')) // 2
console.log(longestValidParentheses(')()())')) // 4
console.log(longestValidParentheses('((()))')) // 4
console.log(longestValidParentheses('')) // 0
