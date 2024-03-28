// Link on the task: https://leetcode.com/problems/maximum-strong-pair-xor-i/description/

/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumStrongPairXor = function (nums) {
    let left = 0;
    let right = 0;
    let maxXor = 0;

    nums.sort((a, b) => a - b);

    while (right < nums.length) {
        const x = nums[left];
        const y = nums[right];

        if (y - x > x) {
            left += 1;
            continue;
        }

        for (let i = left; i < right; i++) {
            maxXor = Math.max(maxXor, nums[i] ^ y);
        }

        right++;
    }

    return maxXor;
};
