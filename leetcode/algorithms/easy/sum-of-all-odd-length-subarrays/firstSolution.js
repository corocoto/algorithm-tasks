// Link on the task: https://leetcode.com/problems/sum-of-all-odd-length-subarrays/description/

/**
 * @param {number[]} arr
 * @return {number}
 */
var sumOddLengthSubarrays = function(arr) {
    let result = 0;
    for (let i = 1; i <= arr.length; i += 2) {
        for (let j = 0; i + j <= arr.length; j++) {
            result += arr.slice(j, j + i).reduce((acc, item) => acc + item, 0);
        }
    }
    return result;
};
