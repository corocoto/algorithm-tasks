// Link on the task: https://leetcode.com/problems/product-of-array-except-self/

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    const result = [];

    for (let i = 0; i < nums.length; i++) {
        let multiply = 1;
        let j = 0;
        
        while (j < nums.length) {
            if (j === i) {
                j++;
                continue;
            }
            multiply *= nums[j];
            j++;
        }
        
        result.push(multiply);
    }
    
    return result;
};
