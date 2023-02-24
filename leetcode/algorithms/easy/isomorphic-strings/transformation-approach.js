// Link on the task: https://leetcode.com/problems/isomorphic-strings/description/

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function(s, t) {
    return numStrRepresentation(s) === numStrRepresentation(t);
};


function numStrRepresentation(string) {
    let result = '';
    for (let i = 0; i < string.length; i++) {
        const index = string.indexOf(string[i]);
        result += `${index} `;
    }

    return result;
}
