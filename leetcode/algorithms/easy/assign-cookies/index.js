// Link on the task: https://leetcode.com/problems/assign-cookies/description/

/**
 * @param {number[]} g
 * @param {number[]} s
 * @return {number}
 */
var findContentChildren = function(g, s) {
    let childPointer = 0;
    let cookiePointer = 0;
    let count = 0;

    g.sort((a,b) => a - b);
    s.sort((a, b) => a - b);

    while (childPointer < g.length && cookiePointer < s.length) {
        const childGreedFactor = g[childPointer];
        const cookieSize = s[cookiePointer];

        if (cookieSize >= childGreedFactor) {
            count++;
            cookiePointer++;
            childPointer++;
        }

        if (cookieSize < childGreedFactor) {
            cookiePointer++;
        }
    }

    return count;
};
