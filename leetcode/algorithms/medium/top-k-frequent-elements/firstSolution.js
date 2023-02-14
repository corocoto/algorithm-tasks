// Link on the task: https://leetcode.com/problems/top-k-frequent-elements/description/

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
    const bucketsMap = new Map();
    for (const num of nums) {
        const count = bucketsMap.has(num) ? bucketsMap.get(num) + 1 : 1;
        bucketsMap.set(num, count);
    }

    const result = [];
    while (k > 0) {
        let maxValue = -Infinity;
        let maxValueKey = null;
        for (const [key, value] of bucketsMap) {
            if (maxValue < value) {
                maxValue = value;
                maxValueKey = key;
            }
        }

        result.push(maxValueKey);
        bucketsMap.delete(maxValueKey);
        k--;
    }
    return result;
};
