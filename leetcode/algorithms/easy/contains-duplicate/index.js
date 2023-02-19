// Link on the task: https://leetcode.com/problems/contains-duplicate/description/

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    const hashSet = new Set();
    for (const num of nums) {
        if (hashSet.has(num)) {
            return true;
        }
        hashSet.add(num);
    }
    return false;
};
