// Link on the task: https://leetcode.com/problems/removing-stars-from-a-string/description/

/**
 * @param {string} s
 * @return {string}
 */
var removeStars = function(s) {
    let i = 0;
    while (i < s.length) {
        if (s[i] === '*') {
            s = s.slice(0, i - 1) + s.slice(i + 1);
            i--;
            continue;
        }
        i++;
    }
    return s;
};
