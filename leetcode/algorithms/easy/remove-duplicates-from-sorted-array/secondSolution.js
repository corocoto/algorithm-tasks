// Link on the task: https://leetcode.com/problems/remove-duplicates-from-sorted-array/description/

/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    let numsLength = nums.length;
    
    for (let i = numsLength - 2; i >= 0; i--) {
        if (nums[i] === nums[i + 1]) {
            nums.splice(i, 1);
            numsLength--;
        }
    }
    
    return numsLength;
};
