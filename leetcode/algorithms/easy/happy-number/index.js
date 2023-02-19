// Link on the task: https://leetcode.com/problems/happy-number/description/

/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
    const nValues = new Set();
    while (n !== 1) {
        if (nValues.has(n)) {
            return false;
        }

        nValues.add(n);
        n = Array
            .from(String(n), num => Math.pow(num, 2))
            .reduce((acc, squareNum) => acc + squareNum);
    }
    return true;
};
