// Link on the task: https://leetcode.com/problems/valid-anagram/description/

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    if (s.length !== t.length) {
        return false;
    }

    const hashMap = {};
    
    for (const char of s) {
        hashMap[char] ??= 0;
        hashMap[char] += 1;
    }

    for (const char of t) {
        if (typeof hashMap[char] === 'undefined') {
            return false;
        }

        hashMap[char] -= 1;

        if (hashMap[char] === 0) {
            delete hashMap[char];
        }
    }

    return Object.values(hashMap).length === 0;
};
