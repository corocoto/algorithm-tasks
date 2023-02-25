// Link on the task: https://leetcode.com/problems/first-unique-character-in-a-string/description/

/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
    const charsMap = new Map();
    for(let i = 0; i < s.length; i++) {
        const count = (charsMap.get(s[i]) ?? 0) + 1;
        charsMap.set(s[i], count);
    }

    for (const [char, count] of charsMap) {
        if (count === 1) {
            return s.indexOf(char);
        }
    }
    return -1;
};
