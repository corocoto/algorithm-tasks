// Link on the task: https://leetcode.com/problems/3sum/description/

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    const result = [];
    const target = 0;

    if (nums.length < 3) {
        return result;
    }

    nums.sort((a, b) => a - b);

    for (let  i = 0; i < nums.length - 2; i++) {
        if (nums[i] > target) {
            break;
        } 

        if (nums[i] === nums[i - 1]) {
            continue;
        }

        let j = i + 1;
        let k = nums.length - 1;

        while (j < k) {
            const sum = nums[i] + nums[j] + nums[k];

            if (sum === target) {
                if (nums[k] !== nums[k + 1] || nums[j] !== nums[j - 1]) {
                    result.push([nums[i], nums[j], nums[k]]);
                }
                k--;
                j++;
            }

            if (sum < target) {
                j++;
            }

            if (sum > target) {
                k--;
            }
        }   
    }

    return result;
};
