// Link on the task: https://leetcode.com/problems/find-the-duplicate-number/

/**
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate = function(nums) {
    const hashSet = new Set();

    for (const num of nums) {
        if (hashSet.has(num)) {
            return num;
        }
        hashSet.add(num);
    }
};
