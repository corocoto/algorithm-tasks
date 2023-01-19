// Link on the task: https://leetcode.com/problems/sort-an-array/description/

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArray = function(nums) {
    const numsLength = nums.length;
    let i = Math.floor(numsLength / 2) - 1;
    for(; i>= 0; i--){
        maxHeapify(nums, numsLength, i)
    }

    for (i = numsLength - 1; i > 0; i--) {
        [nums[i], nums[0]] = [nums[0], nums[i]];
        maxHeapify(nums, i, 0);
    }

    return nums;
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

    if (largest !== index) {
        [nums[index], nums[largest]] = [nums[largest], nums[index]];
        maxHeapify(nums, heapSize, largest);
    }
}
