// Link on the task: https://leetcode.com/problems/kth-largest-element-in-an-array/description/

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function(nums, k) {
    const numsLength = nums.length;
    let i = Math.floor(numsLength / 2) - 1;

    for(; i >= 0; i--) {
        maxHeapify(nums, numsLength, i);
    }

    for(i = numsLength - 1; i > numsLength - 1 - k; i--) {
        [nums[0], nums[i]] = [nums[i], nums[0]];
        maxHeapify(nums, i, 0);
    }

    return nums[i + 1];
};

function maxHeapify(nums, heapSize, index) {
    const left = 2 * index + 1;
    const right = 2 * index + 2;
    let largest = index;

    if (left < heapSize && nums[left] > nums[largest]) {
        largest = left;
    }

    if (right < heapSize && nums[right] > nums[largest]) {
        largest = right;
    }

    if (index !== largest) {
        [nums[index], nums[largest]] = [nums[largest], nums[index]];
        maxHeapify(nums, heapSize, largest);
    }
}
