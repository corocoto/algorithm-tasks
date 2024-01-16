// Link on the task: https://leetcode.com/problems/squares-of-a-sorted-array/description/

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function(nums) {
    let left = 0;
    let right = nums.length - 1;

    while(left <= right) {
        if (left === right) {
            nums[left] **= 2;
            break;
        }

        nums[left] **= 2;
        nums[right] **= 2;

        left++;
        right--;
    }

    return nums.sort((a, b) => a - b);
};
