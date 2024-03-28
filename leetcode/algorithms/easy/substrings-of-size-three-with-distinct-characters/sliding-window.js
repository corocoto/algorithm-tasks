// Link on the task: https://leetcode.com/problems/substrings-of-size-three-with-distinct-characters/description/

/**
 * @param {string} s
 * @return {number}
 */
var countGoodSubstrings = function(s) {
    let i = 2;
    let count = 0;

    while (i < s.length) {
        if (s[i] !== s[i - 1] && s[i] !== s[i - 2] && s[i - 1] !== s[i - 2]) {
            count++;
        }
        i++;
    }

    return count;
};
