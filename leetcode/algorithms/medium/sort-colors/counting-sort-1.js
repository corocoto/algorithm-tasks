// Link on the task: https://leetcode.com/problems/sort-colors/description/

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function(nums) {
    const min = Math.min(...nums);
    const max = Math.max(...nums);
    const numsLength = nums.length;

    const counts = new Array(max - min + 1).fill(0);

    for (let i = 0; i < numsLength; i++) {
        counts[nums[i] - min] += 1; 
    }
    
    for (let i = 1; i < max - min + 1; i++) {
        counts[i] += counts[i - 1];
    }

    const result = new Array(numsLength);
    for (let i = 0; i < numsLength; i++) {
        result[--counts[nums[i] - min]] = nums[i];
    }

    for(let i = 0; i < result.length; i++) {
        nums[i] = result[i];
    }

    return nums;
};
