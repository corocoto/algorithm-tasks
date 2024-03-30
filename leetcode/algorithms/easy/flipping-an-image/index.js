// Link on the task: https://leetcode.com/problems/flipping-an-image/description/

/**
 * @param {number[][]} image
 * @return {number[][]}
 */
var flipAndInvertImage = function(image) {
    return image.map(row => {
        return row.toReversed().map(bit => bit ^ 1)
    })
};
