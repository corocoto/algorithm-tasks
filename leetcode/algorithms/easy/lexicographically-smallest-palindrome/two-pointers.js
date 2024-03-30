// Link on the task: https://leetcode.com/problems/lexicographically-smallest-palindrome/

/**
 * @param {string} s
 * @return {string}
 */
var makeSmallestPalindrome = function(s) {
    let i = 0;
    let j = s.length - 1;

    while (i < j) {
        const [pointerIndex, copiedCharIndex] = s[i] > s[j] ? [i, j] : [j, i]; 
        s = s.slice(0, pointerIndex) + s[copiedCharIndex] + s.slice(pointerIndex + 1);

        if (s[i] === s[j]) {
            i++;
            j--;
        }
    }
    
    return s;
};
