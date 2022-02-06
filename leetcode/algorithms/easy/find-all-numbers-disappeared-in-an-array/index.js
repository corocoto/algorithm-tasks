/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function(nums) {
    const uniqueSortedNums = new Set(nums.sort((a,b) => a - b));
    const numsLength = nums.length;
    const result = [];
    for (let i = 1; i <= numsLength; i++) {
        !uniqueSortedNums.has(i) && result.push(i)
    }
    return result;
};