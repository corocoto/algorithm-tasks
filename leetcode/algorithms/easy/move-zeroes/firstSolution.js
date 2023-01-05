// Link on the task: https://leetcode.com/problems/move-zeroes/description/

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    let nonZeroIndex = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== 0) {
            const cutNumber = nums.splice(i, 1);
            nums.splice(nonZeroIndex, 0, cutNumber);
            nonZeroIndex++;
        }
    }
    return nums;
};
