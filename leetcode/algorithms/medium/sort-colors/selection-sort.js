// Link on the task: https://leetcode.com/problems/sort-colors/description/

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function(nums) {
    for (let i = 0; i < nums.length; i++) {
        let minValueIndex = i;
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[j] < nums[minValueIndex]) {
                minValueIndex = j;
            }
        }
        [nums[i], nums[minValueIndex]] = [nums[minValueIndex], nums[i]];
    }
    return nums;
};
