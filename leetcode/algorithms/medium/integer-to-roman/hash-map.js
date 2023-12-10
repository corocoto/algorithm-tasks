// Link on the task: https://leetcode.com/problems/integer-to-roman/description/

/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function(num) {
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

    return romanInt.reduce((acc, [roman, int]) => {
        acc += roman.repeat(Math.floor(num / int));
        num %= int;
        return acc;
    }, '');
};
