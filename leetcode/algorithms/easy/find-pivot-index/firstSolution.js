// Link on the task: https://leetcode.com/problems/find-pivot-index/description/

/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function(nums) {
    let i = 0;
    while (i < nums.length) {
        const leftSum = nums.slice(0, i).reduce((acc, item) => acc + item, 0);
        const rightSum = nums.slice(i + 1).reduce((acc, item) => acc + item, 0);
        
        if (leftSum === rightSum) {
            return i;
        }
        i++
    }
    return -1;
};
