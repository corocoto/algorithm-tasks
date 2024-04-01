// Link on the task: https://leetcode.com/problems/find-the-duplicate-number/

/**
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate = function(nums) {
    let  i = 0;
    const length = nums.length

    while (i < length) {
        const num = nums[i];

        if (num < length && num !== i) {
            if (num === nums[num]) {
                return num;
            }

            [nums[i], nums[num]] = [nums[num], num];
            continue;
        }
        i++;
    }
};
