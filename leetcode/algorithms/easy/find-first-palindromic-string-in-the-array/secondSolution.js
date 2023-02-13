// Link on the task: https://leetcode.com/problems/find-first-palindromic-string-in-the-array/description/

/**
 * @param {string[]} words
 * @return {string}
 */
var firstPalindrome = function(words) {
    return words.find((word) => 
    word === word.split('').reverse('').join('')) ?? '';
};
