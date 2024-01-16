// Link on the task: https://leetcode.com/problems/maximum-sum-of-distinct-subarrays-with-length-k/

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maximumSubarraySum = function (nums, k) {
    const hashMap = new Map();
    let maxSum = 0;
    let currentSum = 0;

    for (let i = 0; i < k; i++) {
        const value = nums[i];
        currentSum += value;

        hashMap.set(value, (hashMap.get(value) ?? 0) + 1);
    }

    if (hashMap.size === k) {
        maxSum = Math.max(maxSum, currentSum);
    }

    for (let i = k; i < nums.length; i++) {
        const exValue = nums[i - k];
        const newValue = nums[i];

        currentSum = currentSum - exValue + newValue;

        const exValueCount = hashMap.get(exValue);
        if (exValueCount > 1) {
            hashMap.set(exValue, exValueCount - 1)
        } else {
            hashMap.delete(exValue);
        }

        const newValueCount = hashMap.get(newValue) ?? 0;
        hashMap.set(newValue, newValueCount + 1);

        if (hashMap.size === k) {
            maxSum = Math.max(maxSum, currentSum);
        }
    }

    return maxSum;
};
