/*
Given the head of a singly linked list, return true if it is a palindrome.

Approach:
1. have a while loop and traverse the linked List, shift into a new array
2. then loop throught the linkedList again and check if the array is the same, if not, return false

*/

class ListNode{
    constructor(val, next) {
        this.val = val
        this.next = null
    }
}

function turnArrIntoLinkedList(arr) {
    let list = new ListNode(arr[0])
    let curr = list
    for(let i = 1; i < arr.length; i++) {
        curr.next = new ListNode(arr[i])
        curr = curr.next
    }

    return list

}

let test1 = turnArrIntoLinkedList([1,2, 2, 1])
let test2 = turnArrIntoLinkedList([1, 2])
let test3 = turnArrIntoLinkedList([])
let test4 = turnArrIntoLinkedList([5, 5, 2, 3, 3, 2, 5, 5])
let test5 = turnArrIntoLinkedList([10,10,13,13,10,10,1])

const isPalindrome = (head) => {
    let arr = []
    let curr = head

    while(curr) {
        arr.unshift(curr.val)
        curr = curr.next
    }

    let i = 0
    curr = head

    while(curr) {
        if(curr.val !== arr[i]) return false
        curr = curr.next
        i++
    }

    return true
}


console.log(isPalindrome(test1)) // true
console.log(isPalindrome(test2)) // false
console.log(isPalindrome(test3)) // true
console.log(isPalindrome(test4)) // true
console.log(isPalindrome(test5)) // false