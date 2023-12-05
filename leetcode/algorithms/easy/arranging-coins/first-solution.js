// Link on the task: https://leetcode.com/problems/arranging-coins/
/**
 * @param {number} n
 * @return {number}
 */
var arrangeCoins = function (n) {
    let rows = 0;
    
    while (n - rows >= 0) {
        n -= rows;
        rows++;
    }

    return rows - 1;
};
