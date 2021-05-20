

let reverseWord = function (string) {
    let finStr = ''

    for (let char of string) {
        finStr = char + finStr
    }

    return finStr

}

var reverseWords = function (s) {
    let words = s.split(' ')

    for (let i = 0; i < words.length; i++) {
        words[i] = reverseWord(words[i])
    }

    return words.join(' ')

};

/*

Input: s = "Let's take LeetCode contest"
Output: "s'teL ekat edoCteeL tsetnoc"

Input: s = "God Ding"
Output: "doG gniD"

*/