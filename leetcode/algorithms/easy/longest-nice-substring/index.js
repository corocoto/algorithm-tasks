// Link on the task: https://leetcode.com/problems/longest-nice-substring/description/

/**
 * @param {string} s
 * @return {string}
 */
var longestNiceSubstring = function(s) {
    if (s.length < 2) {
        return '';
    }

    const hashSet = new Set(s);

    for (let i  = 0; i < s.length; i++) {
        const char = s[i];
        if (hashSet.has(char.toLowerCase()) && hashSet.has(char.toUpperCase())) {
            continue;
        }

        const leftSubstr = longestNiceSubstring(s.slice(0, i));
        const rightSubstr = longestNiceSubstring(s.slice(i + 1));

        return leftSubstr.length >= rightSubstr.length ? leftSubstr : rightSubstr;
    }

    return s;
};
