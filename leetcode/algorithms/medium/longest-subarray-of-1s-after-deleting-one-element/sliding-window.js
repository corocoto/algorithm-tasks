// Link on the task: https://leetcode.com/problems/longest-subarray-of-1s-after-deleting-one-element/

/**
 * @param {number[]} nums
 * @return {number}
 */
var longestSubarray = function(nums) {
    let left = 0;
    let right = 0;
    let maxCount = 0;
    let zeroIndex = -1;

    while (right < nums.length) {
        if (nums[right] === 1) {
            right++;
            continue;
        }

        if (zeroIndex === -1) {
            zeroIndex = right;
            right++;
            continue;
        } 
        
        maxCount = Math.max(maxCount, right - left - 1);
        left = right = zeroIndex + 1;
        zeroIndex = -1;
    }

    maxCount = Math.max(maxCount, right - left - 1);

    return maxCount;
};
