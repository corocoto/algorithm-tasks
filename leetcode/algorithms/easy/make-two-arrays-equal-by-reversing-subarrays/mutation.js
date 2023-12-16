// Link on the task: https://leetcode.com/problems/make-two-arrays-equal-by-reversing-subarrays/description/

/**
 * @param {number[]} target
 * @param {number[]} arr
 * @return {boolean}
 */
var canBeEqual = function(target, arr) {
    for (let i = 0; i < target.length; i++) {
        const value = target[i];

        const index = arr.indexOf(value);

        if (index !== -1) {
            arr.splice(index, 1);
        }
    }

    return arr.length === 0;
};
