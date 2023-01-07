// Link on the task: https://leetcode.com/problems/array-partition/description/

/**
 * @param {number[]} nums
 * @return {number}
 */
var arrayPairSum = function(nums) {
    nums.sort((a, b) => a - b);
    
    const length = nums.length;
    let i = 0;
    let result = 0;
    for (let j = 1; j < length; j += 2) {
        result += Math.min(nums[i], nums[j]);
        i+= 2;
    }
    
    return result;
};
