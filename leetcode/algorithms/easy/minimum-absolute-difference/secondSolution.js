/**
 * @param {number[]} arr
 * @return {number[][]}
 */
var minimumAbsDifference = function(arr) {
    return arr.sort((a, b) => a - b).reduce((acc, item, index, array) => {
        if (typeof array[index + 1] === 'undefined') {
            return acc;
        }

        const newPair = [item, array[index + 1]];
        const minGap = acc?.[0]?.[1] - acc?.[0]?.[0];
        const newGap = newPair[1] - newPair[0]

        if (minGap === newGap) {
            acc.push(newPair);
        }

        if (minGap > newGap || acc.length === 0) {
            return [newPair];
        }

        return acc;
    }, []);
};
