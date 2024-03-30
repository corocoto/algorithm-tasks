// Link on the task: https://leetcode.com/problems/flipping-an-image/description/

/**
 * @param {number[][]} image
 * @return {number[][]}
 */
var flipAndInvertImage = function(image) {
    image.forEach(row => {
        let i = 0;
        let j = row.length - 1;
        while (i <= j) {
            [row[i], row[j]] = [row[j] ^ 1, row[i] ^ 1];
            i++;
            j--;
        }

        return row;
    });

    return image;
};
