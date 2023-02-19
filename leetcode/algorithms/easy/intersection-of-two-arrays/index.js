// Link on the task: 
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {
    return nums1.reduce((acc, item) => {
        if (nums2.includes(item) && !acc.includes(item)) {
            acc.push(item);
        }

        return acc;
    }, []);
};
