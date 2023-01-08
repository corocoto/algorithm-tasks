// Link on the task: https://leetcode.com/problems/largest-number-at-least-twice-of-others/description/

/**
 * @param {number[]} nums
 * @return {number}
 */
var dominantIndex = function(nums) {
    let maxIndex = -1;
    nums.reduce((acc, num, index) => {
        if (num > acc) {
            acc = num;
            maxIndex = index;
        }
        
        return acc;
    }, 0);
    
    for (let i = 0; i < nums.length; i++) {
        if (i !== maxIndex && nums[i] * 2 > nums[maxIndex]) {
            return -1;
        }
    }
    return maxIndex;
};
