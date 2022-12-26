// Link on the task: https://leetcode.com/problems/cells-in-a-range-on-an-excel-sheet/description/

/**
 * @param {string} s
 * @return {string[]}
 */
var cellsInRange = function(s) {
    const abc = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const [startCell, endCell] = s.split(':');

    const startColumn = startCell.slice(0, 1);
    const startColumnIndex = abc.indexOf(startColumn);
    const startRow = Number(startCell.slice(1));

    const endColumn = endCell.slice(0, 1);
    const endColumnIndex = abc.indexOf(endColumn);
    const endRow = Number(endCell.slice(1));

    const result = [];
    for (let i = startColumnIndex; i <= endColumnIndex; i++) {
        for (let j = startRow; j <= endRow; j++) {
            const cell = abc[i] + j.toString();
            result.push(cell);
        }
    }
    return result;
};
