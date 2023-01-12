// Link on the task: https://leetcode.com/problems/sqrtx/description/


/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
    let low = 1;
    let high = Math.floor(x / 2) + 1;

    while (low <= high) {
        const middle = Math.floor((low + high) / 2);

        const sqr = middle * middle;

        if (sqr === x) {
            return middle;
        }
        if (sqr < x) {
            low = middle + 1;
        } else {
            high = middle - 1;
        }
    }

    return high
};
