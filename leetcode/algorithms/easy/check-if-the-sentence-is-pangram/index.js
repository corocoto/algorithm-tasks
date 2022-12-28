// Link on the task: https://leetcode.com/problems/check-if-the-sentence-is-pangram/description/

/**
 * @param {string} sentence
 * @return {boolean}
 */
var checkIfPangram = function(sentence) {
    const startCharCode = 'a'.charCodeAt();
    const endChartCode = 'z'.charCodeAt();

    if (sentence.length < endChartCode - startCharCode) {
        return false;
    }

    for(let i = startCharCode; i <= endChartCode; i++) {
        if (!sentence.includes(String.fromCharCode(i))) {
            return false;
        }
    }

    return true;
};
