// Link on the task: https://leetcode.com/problems/split-a-string-in-balanced-strings/description/

/**
 * @param {string} s
 * @return {number}
 */
var balancedStringSplit = function(s) {
    let r = 0;
    let l = 0;
    return Array.from(s).reduce((acc, symbol) => {
        symbol === 'R' ? r++ : l++;
        if(r === l) {
            acc++;
            r = l = 0;
        }
        return acc;
    });
};
