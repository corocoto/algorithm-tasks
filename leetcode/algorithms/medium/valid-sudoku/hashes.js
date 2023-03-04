// Link on the task: https://leetcode.com/problems/valid-sudoku/description/

/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function(board) {
    const boardHashSet = new Set();  
    const boardSize = board.length;                          
    
    for (let i = 0; i < boardSize; i++) {           
        for (let j = 0; j < boardSize; j++) {    
            const char = board[i][j] ;
            
            if (char === '.') {
                continue;
            }

            const x = Math.floor(i / 3);      
            const y = Math.floor(j / 3);   

            const rowHash = `row-${i}-${char}`;
            const columnHash = `column-${j}-${char}`;
            const subboxHash = `subbox-${x}-${y}-${char}`;
            
            if (boardHashSet.has(rowHash) || boardHashSet.has(columnHash) || boardHashSet.has(subboxHash))  {
                return false;
            }   
            
            boardHashSet.add(rowHash);
            boardHashSet.add(columnHash);
            boardHashSet.add(subboxHash);
        }
    }
    
    return true; 
};
