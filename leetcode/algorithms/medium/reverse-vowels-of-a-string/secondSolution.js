// Link on the task: https://leetcode.com/problems/reverse-vowels-of-a-string/description/

/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function (s) {
    const vowelsRegexp = /[aeiou]/gi
    const vowels = s.match(vowelsRegexp)

    return s.replace(vowelsRegexp, () => vowels.pop())
};
