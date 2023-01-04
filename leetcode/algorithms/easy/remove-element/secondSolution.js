// Link on the task: https://leetcode.com/problems/remove-element/description/

/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
    const numsLength = nums.length;
    let i = 0;
    let count = 0;
    
    while(i < numsLength && typeof nums[i] === 'number') {
        if(nums[i] === val) {
            nums.splice(i, 1);
            count++;
        } else {
            i++;
        }
        
    }
    return numsLength - count;
};
