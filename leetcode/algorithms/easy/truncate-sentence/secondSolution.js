// Link on the task: https://leetcode.com/problems/truncate-sentence/description/

/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var truncateSentence = function(s, k) {
    return s.split(' ', k).join(' ')
};
