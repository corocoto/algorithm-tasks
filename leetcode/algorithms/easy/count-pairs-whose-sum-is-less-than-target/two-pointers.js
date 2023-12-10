// Link on the task: https://leetcode.com/problems/count-pairs-whose-sum-is-less-than-target/description/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var countPairs = function(nums, target) {
    nums.sort((a, b) => a - b);

    let count = 0;
    let left = 0;
    let right = nums.length - 1;

    while (left < right) {
        if (nums[left] + nums[right] < target) {
            count += right- left;
            left++;
        } else {
            right--;
        }
    }

    return count;
}
