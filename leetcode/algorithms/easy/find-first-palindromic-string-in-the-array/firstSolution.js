// Link on the task: https://leetcode.com/problems/find-first-palindromic-string-in-the-array/description/

/**
 * @param {string[]} words
 * @return {string}
 */
var firstPalindrome = function(words) {
    let i = 0;
    while (i < words.length) {
        let j = 0;
        const wordLength = words[i].length;
        while (j < wordLength) {
            const endParam = j === 0 ? undefined : -j;
            if (words[i].slice(j, j + 1) === words[i].slice(-j - 1,endParam)) {
                j++;
            } else {
                i++;
                break;
            }
        }
        if (j === wordLength) {
            return words[i];
        }
    }
    return '';
};
