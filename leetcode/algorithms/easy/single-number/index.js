/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    return nums.reduce((acc, item) => {
        return acc ^ item; // xor operation
    }, 0);
};