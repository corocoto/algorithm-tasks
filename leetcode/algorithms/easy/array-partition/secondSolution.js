// Link on the task: https://leetcode.com/problems/array-partition/description/

/**
 * @param {number[]} nums
 * @return {number}
 */
var arrayPairSum = function(nums) {
    return nums
        .sort((a, b) => a - b)
        .reduce((acc, num, index) => {
            if (index % 2 === 0) {
                acc += num;
            }
            return acc;
        });
};
