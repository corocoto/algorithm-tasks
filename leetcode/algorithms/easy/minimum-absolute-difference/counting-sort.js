/**
 * @param {number[]} arr
 * @return {number[][]}
 */
var minimumAbsDifference = function(arr) {
    const arrLength = arr.length;

    const min = Math.min(...arr);
    const max = Math.max(...arr);
    const counts = new Array(max - min + 1).fill(0);
    let i = 0;
    

    for (; i < arrLength; i++) {
        counts[arr[i] - min] += 1;
    }

    for(i = 1; i < max - min + 1; i++) {
        counts[i] += counts[i - 1];
    }

    const sortedArray = new Array(arrLength);

    for (i = 0; i < arrLength; i++) {
        sortedArray[--counts[arr[i] - min]] = arr[i];
    }

    let minGap = Infinity;
    return sortedArray.reduce((acc, item, index, array) => {
        if (typeof array[index + 1] === 'undefined') {
            return acc;
        }

        const newPair = [item, array[index + 1]];
        const newGap = newPair[1] - newPair[0];
        const minGap = acc?.[0]?.[1] - acc?.[0]?.[0];

        if (newGap < minGap  || acc.length === 0) {
            return [newPair];
        }

        if (newGap === minGap) {
            acc.push(newPair);
        }

        return acc;
    }, []);
};
