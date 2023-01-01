// Link on the task: Sum of All Odd Length Subarrays

/**
 * @param {number[]} arr
 * @return {number}
 */
var sumOddLengthSubarrays = function(arr) {
    let sum = 0;
    const length = arr.length;
    for (let i = 0; i < length; i++) {
        const total = i * (length - i) + (length - i);
        sum += Math.ceil(total / 2) * arr[i];
    }
    return sum;
};
