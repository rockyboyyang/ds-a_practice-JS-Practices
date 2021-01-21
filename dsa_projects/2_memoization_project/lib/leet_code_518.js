// Work through this problem on https://leetcode.com/problems/coin-change-2/ and use the specs given there.
// Feel free to use this file for scratch work.
let memo = {}
var change = function (amount, coins) {
    let key = amount + '-' + coins;
    if(key in memo) return memo[key]
    if(amount === 0) return 1;

    let currentCoin = coins[coins.length - 1];

    let total = 0;
    for(let qty = 0; qty * currentCoin <= amount; qty++) {
        // coins = [1]
        // amount = 1
        // currentCoin =  coins.lastIdx = 1;
        // qty = 0; 0 * 1 <= 1
        console.log('qty', qty * currentCoin)
        total += change(amount - qty * currentCoin, coins.slice(0, -1));
        // change(0, [1,2])
    }

    memo[key] = total
    return memo[key]
};

console.log(change(1, [1]))
// console.log(memo)