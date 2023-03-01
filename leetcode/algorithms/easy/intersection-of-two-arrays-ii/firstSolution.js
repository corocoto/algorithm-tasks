// Link on the task: https://leetcode.com/problems/intersection-of-two-arrays-ii/description/

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function(nums1, nums2) {
    const [iterateArray, compared] = nums1.length > nums2.length 
    ? [nums2, nums1] 
    : [nums1, nums2];
    
    return iterateArray.reduce((acc, item) => {
        if (compared.includes(item)) {
            acc.push(item);
            const index = compared.indexOf(item);
            compared.splice(index, 1)
        }
        return acc;
    }, []);
};
