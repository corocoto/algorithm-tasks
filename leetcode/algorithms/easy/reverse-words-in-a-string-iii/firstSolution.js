// Link on the task: https://leetcode.com/problems/reverse-words-in-a-string-iii/description/

/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    return s.split(' ').reduce((acc, item, index) => {
        acc += index === 0 ? '' : ' ';
        acc += item.split('').reverse().join('');
        return acc;
    }, '');
};
