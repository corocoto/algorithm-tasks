// Link on the task: https://leetcode.com/problems/sort-colors/description/

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function(nums) {
    if (nums.length <= 1) {
        return nums;
    }

    const max = Math.max(...nums);
    const counts = new Array(max + 1).fill(0);

    for (const num of nums) {
        counts[num] += 1;
    }

    let startingIndex = 0;
    for (let i = 0; i < max + 1; i++) {
        [counts[i], startingIndex] = [startingIndex, counts[i] + startingIndex];
    }

    const sortedArray = new Array(max);
    for (const num of nums) {
        sortedArray[counts[num]] = num;
        counts[num] += 1
    }
    
    for (let i = 0; i < sortedArray.length; i++) {
        nums[i] = sortedArray[i];
    }

    return nums;
};
