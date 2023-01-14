// Link on the task: https://leetcode.com/problems/height-checker/description/

/**
 * @param {number[]} heights
 * @return {number}
 */
var heightChecker = function(heights) {
    const height2= [...heights];
    
    let hasSwapped = true;
    let count = 0;
    while (hasSwapped) {
        hasSwapped = false;
        for (let i = 0; i < height2.length; i++) {
            if (height2[i] > height2[i + 1]) {
                [height2[i], height2[i + 1]] = [height2[i + 1], height2[i]];
                hasSwapped = true;
            } 
        }
    }
    
    return height2.reduce((acc, item, index) => {
        item !== heights[index] && acc++;
        return acc;
    }, 0);
};
