// Link on the task: https://leetcode.com/problems/make-two-arrays-equal-by-reversing-subarrays/description/

/**
 * @param {number[]} target
 * @param {number[]} arr
 * @return {boolean}
 */
var canBeEqual = function(target, arr) {
    const hashMap = {}
    const length =  target.length;

    for (var i = 0; i < length; i++) {
        const key = target[i];

        hashMap[key] = (hashMap[key] ?? 0) + 1;
    }

    for (i = 0; i < length; i++) {
        const key = arr[i];

        if (hashMap[key] === 1) {
            delete hashMap[key];
            continue;
        }

        if (typeof hashMap[key] === 'undefined') {
            return false;
        }
        
        hashMap[key] -= 1;
    }

    return Object.keys(hashMap).length === 0;
};
