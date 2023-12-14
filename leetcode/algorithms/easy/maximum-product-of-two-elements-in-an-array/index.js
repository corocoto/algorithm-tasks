// Link on the task: https://leetcode.com/problems/maximum-product-of-two-elements-in-an-array/description/

/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function (nums) {
    nums.sort((a, b) => a - b);

    const {[nums.length - 2]: a, [nums.length - 1]: b} = nums;
    return (a - 1) * (b - 1); 
};
