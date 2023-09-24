// Link on the task: https://leetcode.com/problems/guess-number-higher-or-lower/description/

/** 
 * Forward declaration of guess API.
 * @param {number} num   your guess
 * @return 	     -1 if num is higher than the picked number
 *			      1 if num is lower than the picked number
 *               otherwise return 0
 * var guess = function(num) {}
 */

/**
 * @param {number} n
 * @return {number}
 */
var guessNumber = function(n) {
    let low = 0;
    let high = n;

    while (low <= high) {
        const middle = Math.floor((low + high) / 2);

        const result = guess(middle);

        switch(result) {
            case -1:
                high = middle -1;
                break;
            case 0:
                return middle;
            case 1:
                low = middle + 1;
                break;
        }

    }
};
