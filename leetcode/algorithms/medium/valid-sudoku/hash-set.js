// Link on the task: https://leetcode.com/problems/valid-sudoku/description/

/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function(board) {
    const boardSize = board.length; 

    for (let i = 0; i < boardSize; i++) {
        const rowHashSet = new Set();
        const columnHashSet = new Set();
        const subboxHashSet = new Set();

        for (let j = 0; j < boardSize; j++) {
            const rowNum = board[i][j];
            const columnNum = board[j][i];
            const subboxNum = board[3 * Math.floor(i / 3) + Math.floor(j / 3)][3 * (i % 3) + (j % 3)];
        
            if (rowHashSet.has(rowNum)) {
                return false;
            }
            
            if (columnHashSet.has(columnNum)) {
                return false;
            }
            
            if (subboxHashSet.has(subboxNum)) {
                return false;
            }
                
            if (rowNum !== '.') {
                rowHashSet.add(rowNum);
            }

            if (columnNum !== '.') {
                columnHashSet.add(columnNum);
            }
            
            if (subboxNum !== '.') {
                subboxHashSet.add(subboxNum);
            }
        }
    }
    return true
};
