const getIndexes = (left, right, string) => {
    while (left >= 0 && right <= string.length) {
        if (string[left] !== string[right]) {
            break;
        }
        left--;
        right++;
    }
    return [
        left + 1,
        right
    ];
}

/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    let maxIndexes = [0, 1];
    for (let i = 0; i < s.length; i++) {
        const oddIndexes = getIndexes(i - 1, i + 1, s);
        const evenIndexes = getIndexes(i - 1, i, s);

        const currentMax = oddIndexes[1] - oddIndexes[0] > evenIndexes[1] - evenIndexes[0] ? oddIndexes : evenIndexes;
        maxIndexes = maxIndexes[1] - maxIndexes[0] > currentMax[1] - currentMax[0]
            ? maxIndexes
            : currentMax;
    }

    return s.slice(maxIndexes[0], maxIndexes[1]);
};