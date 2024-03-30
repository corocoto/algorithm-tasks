// Link on the task: https://leetcode.com/problems/longest-subarray-of-1s-after-deleting-one-element/description/

/**
 * @param {number[]} nums
 * @return {number}
 */
var longestSubarray = function(nums) {
    let left = 0;
    let maxCount = 0;
    let zeroCount = 0;

    for (let right = 0; right < nums.length; right++) {
        if (nums[right] === 0) {
            zeroCount++;
        }

        while (zeroCount > 1) {
            if(nums[left++] === 0) {
                zeroCount--;
            }
        }

        maxCount = Math.max(maxCount, right - left);
    }

    return maxCount;
};
