/**
 * @param {character[]} letters
 * @param {character} target
 * @return {character}
 */
var nextGreatestLetter = function(letters, target) {
    let start = 0, end = letters.length - 1;
    let result = letters[0];
    while (start <= end) {
        const middleIndex = Math.floor((start + end) / 2);
        const guessSymbol = letters[middleIndex];

        const comparedResult = guessSymbol.localeCompare(target);

        if(comparedResult === 1) {
            result = guessSymbol;
            end = middleIndex - 1;
        } else  {
            start = middleIndex + 1
        }
    }
    return result;
};
