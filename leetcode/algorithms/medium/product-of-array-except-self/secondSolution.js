// Link on the task: https://leetcode.com/problems/product-of-array-except-self/description/

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    const output = [];
    const length = nums.length;

    let leftMultiply = 1;
    let rightMultiply = 1;
    
    for (let i = length - 1; i >= 0; i--) {
        output[i] = rightMultiply;
        rightMultiply *= nums[i];
    }
    
    for (let j = 0; j < length; j++) {
        output[j] *= leftMultiply;
        leftMultiply *= nums[j];
    }
    
    return output;
};
