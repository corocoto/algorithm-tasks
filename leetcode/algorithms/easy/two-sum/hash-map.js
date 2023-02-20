// Link on the task: https://leetcode.com/problems/two-sum/description/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    const numsIndexesMap = new Map();
    const length = nums.length;
    for (let i = 0; i < length; i++) {
        const secondNum = target - nums[i];

        if (numsIndexesMap.has(secondNum)) {
            return [i, numsIndexesMap.get(secondNum)]
        }

        numsIndexesMap.set(nums[i], i);
    }
};
