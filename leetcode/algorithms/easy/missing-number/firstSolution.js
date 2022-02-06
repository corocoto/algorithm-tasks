/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    let i = nums.length;
    let result = null
    while(i >= 0) {
        if (!nums.includes(i)) {
            result = i;
            break;
        }
        i--;
    }
    return result;
};