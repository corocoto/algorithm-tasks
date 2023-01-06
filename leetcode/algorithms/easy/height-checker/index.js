// Link on the task: https://leetcode.com/problems/height-checker/description/

/**
 * @param {number[]} heights
 * @return {number}
 */
var heightChecker = function(heights) {
    const sortedArray = [...heights].sort((a, b) => a - b);
    
    return sortedArray.reduce((acc, item, index) => {
        if (item !== heights[index]) {
            acc++;
        }
        return acc;
    }, 0);
};
