// Link on the task: https://leetcode.com/problems/third-maximum-number/description/

/**
 * @param {number[]} nums
 * @return {number}
 */
var thirdMax = function(nums) {
    nums.sort((a, b) => (a > b ? -1 : 1));

    let i = 0;
    let max = 0;
    while (i < nums.length) {
        if (nums[i] === nums[i + 1]){
            nums.splice(i, 1);
        } else if (i === 2) {
            return nums[i]
        } else {
            max = Math.max(max, nums[i]);
            i++;
        }
    }

    return max;
};
