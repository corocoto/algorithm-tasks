// Link on the task: https://leetcode.com/problems/count-asterisks/description/

/**
 * @param {string} s
 * @return {number}
 */
var countAsterisks = function(s) {
    let pair = false;
    let result = 0;

    for (let i = 0; i < s.length; i++) {
        if (s[i] === '|') {
            pair = !pair;
        } else if (!pair && s[i] === '*') {
            result++;
        }
    }

    return result;
};
