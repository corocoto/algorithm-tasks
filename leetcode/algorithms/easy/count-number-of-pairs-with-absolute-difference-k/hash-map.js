// Link on the task: https://leetcode.com/problems/count-number-of-pairs-with-absolute-difference-k/description/

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var countKDifference = function(nums, k) {
    const map = {};

    for(let i of nums) {
        map[i] ? map[i]++ : map[i] = 1 
    }
    
    let pairs = 0;
    
    for(let i = 0; i < nums.length; i++) {
        if(map[nums[i] - k]) {
            pairs += map[nums[i] - k]
        }
    }
    
    return pairs;
};
