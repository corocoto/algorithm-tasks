// Link on the task: https://leetcode.com/problems/intersection-of-two-arrays-ii/description/

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function(nums1, nums2) {
    const hashMap = new Map();
    const result = [];

    for (const num of nums1) {
        hashMap.set(num, (hashMap.get(num) ?? 0) + 1);
    }
  
    for (const num of nums2) {
        const count = hashMap.get(num);
      
        if (count > 0) {
            result.push(num);
            hashMap.set(num, count - 1);
        }
    }
    
    return result;
};
