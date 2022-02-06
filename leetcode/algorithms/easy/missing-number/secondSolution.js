/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    const numsLength = nums.length;
    const sum = nums.reduce((acc, num) => acc + num);
    return numsLength * (numsLength + 1) / 2 - sum;
};