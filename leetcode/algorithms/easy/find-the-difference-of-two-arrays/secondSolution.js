// Link on the task: https://leetcode.com/problems/find-the-difference-of-two-arrays/description/

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[][]}
 */
var findDifference = function(nums1, nums2) {
    const uniqueNums1 = new Set(nums1);
    const uniqueNums2 = new Set(nums2);
    
    nums2.forEach(value => uniqueNums1.delete(value));
    nums1.forEach(value => uniqueNums2.delete(value));    

    return [[...uniqueNums1],[...uniqueNums2]];
};
