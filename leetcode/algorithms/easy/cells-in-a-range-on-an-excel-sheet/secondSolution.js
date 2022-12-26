/**
 * @param {string} s
 * @return {string[]}
 */
var cellsInRange = function(s) {
    const [startColumn, startRow, , endColumn, endRow] = s;
    
    const result = [];  
    for (let column = startColumn.charCodeAt(0); column <= endColumn.charCodeAt(); column++) {
    for (let row = +startRow; row <= +endRow; row++) {
      result.push(String.fromCharCode(column) + row);
    }
  }
  return result;
};
