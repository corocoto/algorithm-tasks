// Link on the task: https://leetcode.com/problems/unique-number-of-occurrences/description/

/**
 * @param {number[]} arr
 * @return {boolean}
 */
var uniqueOccurrences = function(arr) {
    const hashMap = new Map();

    for (let i = 0; i < arr.length; i++) {
        const key = arr[i]
        const count = hashMap.get(key) ?? 0;

        hashMap.set(key, count + 1);
    }

    const counts = Array.from(hashMap.values());
    return new Set(counts).size === counts.length;
}
