// Link on the task: https://leetcode.com/problems/sort-the-people/description/

/**
 * @param {string[]} names
 * @param {number[]} heights
 * @return {string[]}
 */
var sortPeople = function(names, heights) {
    for (let i = 0; i < heights.length; i++) {
        let maxHeightIndex = i;
        for (let j = i + 1; j < heights.length; j++) {
            if (heights[j] > heights[maxHeightIndex]) {
                maxHeightIndex = j;
            }
        }
        [heights[i], heights[maxHeightIndex]] = [heights[maxHeightIndex], heights[i]];
        [names[i], names[maxHeightIndex]] = [names[maxHeightIndex], names[i],]
    }
    return names;
};
