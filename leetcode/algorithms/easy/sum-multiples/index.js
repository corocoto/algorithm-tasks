// Link on the task: https://leetcode.com/problems/sum-multiples/description/

/**
 * @param {number} n
 * @return {number}
 */
var sumOfMultiples = function(n) {
    let i = 1;
    let result = 0;

    while (i <= n) {
        if (i % 3 === 0 || i % 5 === 0 || i % 7 === 0) {
            result += i;
        }
        i++;
    }

    return result;
};
