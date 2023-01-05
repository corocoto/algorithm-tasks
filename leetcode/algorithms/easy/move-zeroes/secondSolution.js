// Link on the task: https://leetcode.com/problems/move-zeroes/description/

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    let nonZeroIndex = 0;
    for (var i = 0; i < nums.length; i++) {
        if (nums[i] !== 0) {
            nums[nonZeroIndex] = nums[i];
            if (i !== nonZeroIndex) {
                nums[i] = 0;
            }
            nonZeroIndex++;
        }
    }
};
