/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function(nums) {
    let i = 0;
    const numsLength = nums.length;
    while (i < numsLength) {
        const position = nums[i] - 1;
        if (nums[i] !== nums[position]) {
            [nums[i], nums[position]] = [nums[position], nums[i]];
        } else {
            i++;
        }
    }
    const result = [];
    for (let i = 0; i < numsLength; i++) {
        if (nums[i] !== i + 1) {
            result.push(i + 1);
        }
    }
    return result;
};
console.log(findDisappearedNumbers([1,1]));