// Link on the task: https://leetcode.com/problems/find-pivot-index/description/

/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function(nums) {
    const sum = nums.reduce((acc, num) => acc + num, 0);
    let leftSum = 0;
    for (let i = 0; i < nums.length; i++) {
        if (leftSum === sum - leftSum - nums[i]) {
            return i;
        }
        leftSum += nums[i];
    }
    return -1;
};
