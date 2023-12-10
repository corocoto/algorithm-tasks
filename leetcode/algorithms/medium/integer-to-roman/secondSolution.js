// Link on the task: https://leetcode.com/problems/integer-to-roman/description/

const romanInt = [
    ['M', 1000],
    ['CM', 900],
    ['D', 500],
    ['CD', 400],
    ['C', 100],
    ['XC', 90],
    ['L', 50],
    ['XL', 40],
    ['X', 10],
    ['IX', 9],
    ['V', 5],
    ['IV', 4],
    ['I', 1],
];

/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function(num) {
    let result = '';
    for (let i = 0; num > 0; i++) {
        while (num >= romanInt[i][1]) {
            result += romanInt[i][0];
            num -= romanInt[i][1];
         }
    }
    
    return result;
};
