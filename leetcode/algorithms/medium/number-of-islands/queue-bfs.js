// Link on the task: https://leetcode.com/problems/number-of-islands/description/

/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
    const queue = [];
    const visitedCoords = new Set();

    let islandsCount = 0;

    for (let i = 0; i < grid.length; i++) {
        while (grid[i].includes('1')) {
            const j = grid[i].indexOf('1');


            queue.push([i, j]);
            islandsCount += 1;
            visitedCoords.add(`${i}-${j}`);

            while (queue.length > 0) {
                const [row, column] = queue.shift();

                const neighbours = [];

                if (row > 0) {
                    neighbours.push([row - 1, column]);
                }

                if (row + 1 < grid.length) {
                    neighbours.push([row + 1, column])
                }

                if (column > 0) {
                    neighbours.push([row, column - 1]);
                }

                if (column +1 < grid[0].length) {
                    neighbours.push([row, column + 1])
                }

                for (const [r, c] of neighbours) {
                    const hash = `${r}-${c}`;
                    if (grid[r][c] === '1' && !visitedCoords.has(hash)) {
                        queue.push([r, c]);
                        visitedCoords.add(hash);
                    }
                }

                grid[row][column] = '0';
            }
        }
    }
    return islandsCount;
};
