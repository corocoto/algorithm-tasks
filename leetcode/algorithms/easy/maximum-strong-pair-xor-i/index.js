// Link on the task: https://leetcode.com/problems/maximum-strong-pair-xor-i/description/

/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumStrongPairXor = function (nums) {
    let k = 0;
    let maxXor = Number.MIN_VALUE;
    nums.sort((a, b) => a - b);

    for (let i = k; i < nums.length;) {
        const num1 = nums[k];
        const num2 = nums[i];

        const absCalc = Math.abs(num1 - num2);
        const minNum = Math.min(num1, num2);

        if (absCalc <= minNum) {
            maxXor = Math.max(maxXor, num1 ^ num2);
            i++;
        } 

        if (absCalc > minNum || (i === nums.length && i !== k)) {
            i = ++k;
        }
    }

    return maxXor;
};
