
// https://leetcode.com/problems/count-items-matching-a-rule/

var countMatches = function (items, ruleKey, ruleValue) {
    let targetIdx;
    let count = 0;

    if (ruleKey === "type") targetIdx = 0
    else if (ruleKey === "color") targetIdx = 1
    else if (ruleKey === "name") targetIdx = 2

    for (let item of items) {
        if (item[targetIdx] === ruleValue) count++
    }

    return count

};