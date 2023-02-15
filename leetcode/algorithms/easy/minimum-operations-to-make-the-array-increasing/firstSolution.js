// Link on the task: https://leetcode.com/problems/minimum-operations-to-make-the-array-increasing/description/

/**
 * @param {number[]} nums
 * @return {number}
 */
var minOperations = function(nums) {
    return nums.reduce((acc, num, index, array) => {
        while(num >= array[index + 1] && array[index + 1] !== undefined) {
            array[index + 1]++;
            acc++;
        }

        return acc;
    }, 0);
};
