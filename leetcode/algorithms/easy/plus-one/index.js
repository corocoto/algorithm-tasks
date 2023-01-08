// Link on the task: https://leetcode.com/problems/plus-one/description/

/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    let dozens = 0;
    let i = lastIndex = digits.length - 1;
    while (i >= 0) {
        const guessValue = digits[i] + (i === lastIndex ? 1 : dozens);
        const actualValue = guessValue / 10;
        dozens = Math.floor(actualValue);
        digits[i] = (actualValue - dozens) * 10;
        i--;
    }

    dozens && digits.unshift(dozens);

    return digits;
};
