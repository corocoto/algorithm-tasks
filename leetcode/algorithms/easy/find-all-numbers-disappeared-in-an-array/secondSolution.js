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

    return nums.reduce((acc, num, index) => {
        if(num !== index + 1) {
            acc.push(index + 1)
        }
        return acc;
    }, []);
};
