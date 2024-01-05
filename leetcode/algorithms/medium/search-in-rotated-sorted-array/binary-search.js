// Link on the task: https://leetcode.com/problems/search-in-rotated-sorted-array/description/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    const length = nums.length;

    for (var k = 0; k < length - 1; k++) {
        if (nums[k] > nums[k + 1]) {
            break;
        }
    }

    if (nums[k] === target) {
        return k;
    }

    return binarySearch(0, k, nums, target) ?? binarySearch(k + 1, length - 1, nums, target) ?? -1;
};

function binarySearch(left, right , array, target) {
    while (left <= right) {
        const mid = Math.floor((right + left) / 2);

        if (array[mid] === target) {
            return mid;
        }

        if (array[mid] < target) {
            left = mid + 1;
        }

        if (array[mid] > target) {
            right = mid - 1;
        }
    }
}
