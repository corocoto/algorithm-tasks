// Link on the task: https://leetcode.com/problems/maximum-number-of-vowels-in-a-substring-of-given-length/description/

/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var maxVowels = function (s, k) {
    const vowelRegExp = /a|e|i|o|u/i;

    let vowelsSum = 0;
    for (let i = 0; i < k; i++) {
        vowelsSum += vowelRegExp.test(s[i]);
    }

    let maxVowelsSum = vowelsSum;
    for (let i = k; i < s.length; i++) {
        vowelsSum += vowelRegExp.test(s[i]) -  vowelRegExp.test(s[i - k]);
        maxVowelsSum = Math.max(maxVowelsSum, vowelsSum);
    }

    return maxVowelsSum;
};
