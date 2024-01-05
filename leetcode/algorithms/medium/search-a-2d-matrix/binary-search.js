// Link on the task: https://leetcode.com/problems/search-a-2d-matrix/description/

/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
    const m = matrix.length;
    const n = matrix[0].length;

    let left = 0;
    let right = m * n - 1;

    
    while (left <= right) {
        const mid = Math.floor((left + right) / 2);
        const midRow = Math.floor(mid / n);
        const midColumn = Math.floor(mid % n);

        if(matrix[midRow][midColumn] === target) {
            return true
        }

        if (matrix[midRow][midColumn] > target) {
            right = mid - 1;
        }

        if (matrix[midRow][midColumn] < target) {
            left = mid + 1;
        }
    }

    return false;
};
