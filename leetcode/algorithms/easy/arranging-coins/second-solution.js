// Link on the task: https://leetcode.com/problems/arranging-coins/description/

/**
 * @param {number} n
 * @return {number}
 */
var arrangeCoins = function (n) {
    let stairs = 0;
    while (stairs <= n) {
        n -= stairs;
        stairs++;
    }

    return stairs - 1;
};
