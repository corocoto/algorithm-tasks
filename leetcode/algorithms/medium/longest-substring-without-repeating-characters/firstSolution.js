// Link on the task: https://leetcode.com/problems/longest-substring-without-repeating-characters/description/

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let maxLength = 0;
    
    for (let i = 0; i < s.length; i++) {
        let substr = s[i];
        for (let j = i + 1; j < s.length; j++) {
            if (substr.includes(s[j])) {
                break;
            }
            substr += s[j];
        }
        
        maxLength = Math.max(maxLength, substr.length)
    }
    
    return maxLength;
};
