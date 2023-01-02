// Link on the task: https://leetcode.com/problems/first-unique-character-in-a-string/description/

/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
    let i = 0;
    const hashMap = new Map();
    for(; i < s.length; i++) {
        const count = (hashMap.get(s[i]) ?? 0) + 1;
        hashMap.set(s[i], count);
    }

    for (i = 0; i < s.length; i++) {
        if (hashMap.get(s[i]) === 1) {
            return i
        }
    }
    return -1;
};
