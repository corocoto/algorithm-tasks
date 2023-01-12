// Link on the task: https://leetcode.com/problems/reverse-words-in-a-string-iii/description/

/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    let result = '';
    let word = '';
    for (let char of s) {
        if (char === ' '){
            result += word + char;
            word = '';
        } else {
            word = char + word
        }
    }
    return result + word;
};
