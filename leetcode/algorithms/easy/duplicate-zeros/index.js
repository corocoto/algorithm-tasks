// Link on the task: https://leetcode.com/problems/duplicate-zeros/description/

/**
 * @param {number[]} arr
 * @return {void} Do not return anything, modify arr in-place instead.
 */
var duplicateZeros = function(arr) {
    let i = 0;
    
    while ( i < arr.length) {
        if (arr[i] === 0) {
            arr.pop();
            arr.splice(i, 0, 0);
            i+=2;
        } else {
            i++;
        }
        
    }
};
