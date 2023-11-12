// Link on the task: https://leetcode.com/problems/counting-bits/description/

/**
 * @param {number} n
 * @return {number[]}
 */
var countBits = function(n) {
    let i = 0;
    const result = [];

    while (i <= n) {
       const binRepresentationString = i.toString(2);
       const count = binRepresentationString.match(/1/g)?.length ?? 0;
       result.push(count);
       i++;
    } 

    return result;
};
