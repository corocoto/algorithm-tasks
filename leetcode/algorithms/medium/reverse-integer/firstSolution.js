// Link on the task: https://leetcode.com/problems/reverse-integer/description/

/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    const positiveValue = parseFloat(String(x).split('').reverse().join(''));
    const limit = 0x7FFFFFFF;
    return (positiveValue > limit) ? 0 : positiveValue * Math.sign(x);
};
