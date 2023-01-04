// Link on the task: https://leetcode.com/problems/valid-mountain-array/description/

/**
 * @param {number[]} arr
 * @return {boolean}
 */
var validMountainArray = function(arr) {
    let i = 0;
    let j = arr.length - 1;

    while (arr[i] < arr[i + 1] || arr[j] < arr[j - 1]) {
        if(arr[i] < arr[i + 1]) {
            i++
        }

        if(arr[j] < arr[j - 1]) {
            j--;
        }
    }

    return i === j && j !== 0 && i !== arr.length - 1;
};
