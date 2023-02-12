// Link on the task: https://leetcode.com/problems/maximum-gap/description/

/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumGap = function(nums) {
    nums.sort((a, b) => a - b);

    let maxGap = 0;
    for (let i = 1; i < nums.length; i++) {
        maxGap = Math.max(maxGap, nums[i] - nums[i - 1]);
    }

    return maxGap;
};
