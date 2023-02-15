// Link on the task: https://leetcode.com/problems/minimum-operations-to-make-the-array-increasing/description/

/**
 * @param {number[]} nums
 * @return {number}
 */
var minOperations = function(nums) {
    let result = 0;
    if (nums.length < 2) {
        return result;
    }

    for (let i = 1; i < nums.length; i++) {
        if (nums[i] <= nums[i - 1]) {
            const diff = nums[i - 1] - nums[i] + 1;
            result += diff;
            nums[i] += diff;
        }
    }

    return result;
};
