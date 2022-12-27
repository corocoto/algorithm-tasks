// Link on the task: https://leetcode.com/problems/decode-the-message/description/

/**
 * @param {string} key
 * @param {string} message
 * @return {string}
 */
var decodeMessage = function(key, message) {
    const abc = 'abcdefghijklmnopqrstuvwxyz';
    const hashMap = new Map();
    const keyWithoutSpaces = key.replace(/\s/g, '');
    const uniqueKeyArray = [...new Set(keyWithoutSpaces)];

    for (let i = 0; i < uniqueKeyArray.length; i++) {
        hashMap.set(uniqueKeyArray[i], abc[i]);
    }

    return Array.from(message).reduce((acc, symbol) => {
        acc += hashMap.has(symbol) ? hashMap.get(symbol) : ' ';
        return acc;
    }, '');
};
