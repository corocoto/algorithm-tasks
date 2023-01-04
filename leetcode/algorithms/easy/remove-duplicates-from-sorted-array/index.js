// Link on the task: https://leetcode.com/problems/remove-duplicates-from-sorted-array/description/

/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    const numsLength = nums.length;
    let i = 0;
    let j = 0;
    
    while(i < numsLength && typeof nums[i + 1] === 'number') {
        if(nums[i] === nums[i + 1]) {
            nums.splice(i, 1);
            j++;
        } else {
            i++;
        }
    }
    return numsLength - j;
};
