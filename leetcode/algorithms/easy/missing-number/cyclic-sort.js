// Link on the task: https://leetcode.com/problems/missing-number/

/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    let i = 0;
    const length = nums.length;

    while (i < length) {
        const num = nums[i];

        if (num !== i && num < length) {
            [nums[i], nums[num]] = [nums[num], nums[i]];
            continue;
        } 

        i++;
    }

    for (i = 0; i < length; i++) {
        if (nums[i] !== i) {
            return i;
        }
    }

    return length;
};
