/**
 * @param {number} n
 * @return {number[]}
 */
var countBits = function(n) {
    const result = [];
    for (let i = 0; i <= n; i++) {
        const binaryString = (i).toString(2);
        const sum = [...binaryString].reduce((acc, item) => acc + Number(item), 0);
        result.push(sum);
    }
    return result;
};