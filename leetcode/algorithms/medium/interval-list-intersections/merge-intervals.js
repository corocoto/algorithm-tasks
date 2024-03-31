// Link on the task: https://leetcode.com/problems/interval-list-intersections/description/
/**
 * @param {number[][]} firstList
 * @param {number[][]} secondList
 * @return {number[][]}
 */
var intervalIntersection = function(firstList, secondList) {
    const result = [];
    let i = 0;
    let j = 0;

    while (i < firstList.length && j < secondList.length) {
        const firstListInterval = firstList[i];
        const secondListInterval = secondList[j];

        const maxStart = Math.max(firstListInterval[0], secondListInterval[0]);
        const minEnd = Math.min(firstListInterval[1], secondListInterval[1]);

        if (minEnd >= maxStart) {
            result.push([maxStart, minEnd]);
        }

        if (firstListInterval[1] >= secondListInterval[1]) {
            j++;
        } else {
            i++;
        }
    }

    return result;
};
