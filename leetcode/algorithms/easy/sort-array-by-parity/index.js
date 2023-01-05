// Link on the task: https://leetcode.com/problems/sort-array-by-parity/description/

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArrayByParity = function(nums) {
    let evenIntegerIndex = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] % 2 == 0) {
            [nums[i], nums[evenIntegerIndex]] = [nums[evenIntegerIndex], nums[i]];
            evenIntegerIndex++;
        }
    }
    
    return nums;
};
