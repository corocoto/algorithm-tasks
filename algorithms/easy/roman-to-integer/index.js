const {ROMAN_NUMBERS_ARRAY, ROMAN_NUMBERS} = require('./constants');
/**
 * @param {string} s
 * @return {number}
 */
const romanToInt = function(s) {
    let result = 0;
    const strLength = s.length;
    for (let i = 0; i < strLength; i++) {

        const symbolIndex = ROMAN_NUMBERS_ARRAY.indexOf(s[i]);
        const nextSymbolIndex = ROMAN_NUMBERS_ARRAY.indexOf(s[i + 1]);

        if (nextSymbolIndex - symbolIndex > 0) {
            result += ROMAN_NUMBERS[s[i + 1]] - ROMAN_NUMBERS[s[i]];
            i ++;
            continue;
        }
        result += ROMAN_NUMBERS[s[i]];
    }
    return result;
};

module.exports = romanToInt;