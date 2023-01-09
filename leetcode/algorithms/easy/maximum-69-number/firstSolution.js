// Link on the task: https://leetcode.com/problems/maximum-69-number/description/

/**
 * @param {number} num
 * @return {number}
 */
var maximum69Number  = function(num) {
    let isChange = false;
    const stringifyResult = Array.from(String(num), num => {
        if (num === '6' && !isChange) {
            isChange = true
            return 9;
        } else {
            return Number(num);
        }
    }).join('');

    return Number(stringifyResult)
};
