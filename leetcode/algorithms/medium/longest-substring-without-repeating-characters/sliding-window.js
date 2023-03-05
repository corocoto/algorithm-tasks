// Link on the task: https://leetcode.com/problems/longest-substring-without-repeating-characters/description/

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    const charsSet = new Set();
    let leftPos = 0;
    let maxSize = 0;

    for (let i = 0; i < s.length; i++) {
        while (charsSet.has(s[i])) {
            charsSet.delete(s[leftPos]);
            leftPos++;
        }

        charsSet.add(s[i]);
        maxSize = Math.max(maxSize, i - leftPos + 1);
    }

    return maxSize;
};
