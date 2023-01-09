// Link on the task: https://leetcode.com/problems/maximum-69-number/description/

/**
 * @param {number} num
 * @return {number}
 */
var maximum69Number  = function(num) {
    num = String(num);
    let result = '';
    for (let i = 0; i < num.length; i++) {
        if (num[i] === '6') {
            result += '9';
            result += num.slice(i + 1);
            return +result;
        }
        result += num[i]
    }
    return result;
};
