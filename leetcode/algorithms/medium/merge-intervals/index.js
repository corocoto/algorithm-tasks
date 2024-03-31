// Link on the task: https://leetcode.com/problems/merge-intervals/

/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
    const length = intervals.length;

    if (length < 2) {
        return intervals;
    }

    intervals.sort((a, b) => a[0] - b[0]);
    let start = null;
    let end = null;

    const mergedIntervals = [];

    for (const interval of intervals) {
        if (start === null || end === null) {
            [start, end] = interval;
            continue;
        }

        if (end >= interval[0]) {
            end = Math.max(end, interval[1]);
            continue;
        }

        mergedIntervals.push([start, end]);
        [start, end] = interval;
    }

    mergedIntervals.push([start, end]);

    return mergedIntervals;
};
