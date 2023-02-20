// Link on the task: https://leetcode.com/problems/two-sum/description/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    for (let i = 0, length = nums.length; i< length; i++){
        for(let j = i + 1; j < length; j++){
            if(nums[j] === target - nums[i]){
                return [i, j];
            }
        }
    }
};
