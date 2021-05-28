
// https://leetcode.com/problems/sorting-the-sentence/submissions/

var sortSentence = function (s) {
    let words = s.split(' ')
    words.sort((a, b) => {
        return +a[a.length - 1] - +b[b.length - 1]
    })
    return words.map((word) => word.slice(0, word.length - 1)).join(' ')
};