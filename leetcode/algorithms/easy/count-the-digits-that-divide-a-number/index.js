// Link on the task: https://leetcode.com/problems/count-the-digits-that-divide-a-number/description/

/**
 * @param {number} num
 * @return {number}
 */
var countDigits = function(num) {
    return String(num).split('').reduce((acc, item) => {
        if (num % item === 0) {
            acc++;
        }
        return acc;
    }, 0);
};
