// Link on the task: https://leetcode.com/problems/reverse-words-in-a-string/description/

/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function (s) {
    return s
        .trim()
        .replace(/\s+/g, ' ')
        .split(' ')
        .reverse()
        .join(' ');
};
