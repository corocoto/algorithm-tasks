// Link on the task: https://leetcode.com/problems/contains-duplicate-ii/description/

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function(nums, k) {
    const hashMap = new Map();
    for (let i = 0; i < nums.length; i++) {
        const indexes = hashMap.get(nums[i]) ?? [];

        if (
            indexes.length !== 0 && 
            indexes.some(j => Math.abs(i - j) <= k)
        ) {
            return true;
        } 
            
        indexes.push(i);
        hashMap.set(nums[i], indexes);
    }
    return false;
};
