// Link on the task: https://leetcode.com/problems/separate-the-digits-in-an-array/description/

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var separateDigits = function(nums) {
    return nums.reduce((acc, num) => {
        Array.from(`${num}`, (str) => acc.push(+str));
        return acc;
    }, []);
};
