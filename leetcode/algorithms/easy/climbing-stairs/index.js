/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    let num1 = 1;
    let num2 = 2;
    for (let i = 3; i <= n; i++) {
        [num1, num2] = [num2, num1 + num2];
    }
    return n === 1 ? num1 : num2;
};