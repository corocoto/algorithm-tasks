// Link on the task: https://leetcode.com/problems/truncate-sentence/description/


/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var truncateSentence = function(s, k) {
    let spaceCount = 0;
    for (let i = 0; i < s.length; i++) {
        if (s[i] === ' ') {
            spaceCount += 1;
        }
        if (spaceCount === k) {
            return s.slice(0, i);
        }
    }
    return s;
};
