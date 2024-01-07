// Link on the task: https://leetcode.com/problems/3sum-closest/description/
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function(nums, target) {
    let result = -Infinity;

    nums.sort((a, b) => a - b);

    for (let i = 0; i < nums.length - 2; i++) {
        let j = i + 1;
        let k = nums.length - 1;

        while (j < k) {
            const sum = nums[i] + nums[j] + nums[k];
            
            if (Math.abs(sum - target) < Math.abs(result - target)) {
                result = sum
            }

            if (sum > target) {
                k--;
                continue;
            } 

            j++;
        }   
    }

    return result;
};
