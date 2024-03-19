// Link on the task: https://leetcode.com/problems/decode-xored-array/

/**
 * @param {number[]} encoded
 * @param {number} first
 * @return {number[]}
 */
var decode = function (encoded, first) {
    const result = [first];
    let i = 0;
    while (i < encoded.length) {
        const calculation = result[i] ^ encoded[i];
        result.push(calculation);
        i++;
    }

    return result;
};
