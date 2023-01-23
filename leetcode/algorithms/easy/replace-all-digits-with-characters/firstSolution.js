// Link on the task: https://leetcode.com/problems/replace-all-digits-with-characters/description/

/**
 * @param {string} s
 * @return {string}
 */
var replaceDigits = function(s) {
    return Array.from(s).reduce((acc, char, index, array) => {
        if (index % 2 !== 0) {
            const prevCharCode = array[index - 1].charCodeAt();
            char = String.fromCharCode(prevCharCode + Number(char));
        } 
        acc += char;
        return acc;
    }, '');
};
