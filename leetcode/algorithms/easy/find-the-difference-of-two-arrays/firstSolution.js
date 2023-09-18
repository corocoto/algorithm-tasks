// Link on the task: https://leetcode.com/problems/find-the-difference-of-two-arrays/description/

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[][]}
 */
var findDifference = function(nums1, nums2) {
    const nums1Set = new Set();
    const nums2Set = new Set();
    
    nums1.forEach((item) => {
        if (!nums2.includes(item)) {
            nums1Set.add(item);
        }
    });

    nums2.forEach((item) => {
        if (!nums1.includes(item)) {
            nums2Set.add(item);
        }
    });

    return [[...nums1Set], [...nums2Set]]
};
