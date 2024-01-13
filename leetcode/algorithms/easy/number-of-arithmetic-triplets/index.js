// Link on the task: https://leetcode.com/problems/number-of-arithmetic-triplets/description/

/**
 * @param {number[]} nums
 * @param {number} diff
 * @return {number}
 */
var arithmeticTriplets = function(nums, diff) {
    let count = 0;

    for (let i = 0; i < nums.length - 2; i++) {
        let j = i + 1;
        let k = nums.length - 1;

        while (j < k) {
            const diff1 = nums[j] - nums[i];
            const diff2 = nums[k] - nums[j];

            if (diff1 === diff && diff2 === diff) {
                count++;
                j++;
            }

            if (diff1 < diff) {
                j++;
                continue;
            }

            if (diff2 > diff) {
                k--;
                continue;
            }

            break;
        }
    }

    return count;
};
