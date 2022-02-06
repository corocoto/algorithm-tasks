/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    const sortedNumsArray = nums1
        .concat(nums2)
        .sort((a, b) => a- b);
    const numsArrayLength = sortedNumsArray.length;
    const arrayCenter = numsArrayLength / 2;
    return numsArrayLength % 2
        ? sortedNumsArray[Math.floor(arrayCenter)]
        : (sortedNumsArray[arrayCenter] + sortedNumsArray[arrayCenter - 1]) / 2;
};