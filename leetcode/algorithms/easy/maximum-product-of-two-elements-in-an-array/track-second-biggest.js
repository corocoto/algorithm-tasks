// Link on the task: https://leetcode.com/problems/maximum-product-of-two-elements-in-an-array/description/

/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function (nums) {
    let x = 0;
    let y = 0;

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] > x) {
            [y, x] = [x, nums[i]];
        } else if (y < nums[i]) {
            y = nums[i];
        }
    }

    return (x - 1) * (y - 1);
};
