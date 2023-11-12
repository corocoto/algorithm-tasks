// Link on the task: https://leetcode.com/problems/jewels-and-stones/description/

/**
 * @param {string} jewels
 * @param {string} stones
 * @return {number}
 */
var numJewelsInStones = function(jewels, stones) {
    return stones.split('').reduce((acc, stone) => {
        return jewels.includes(stone) ? acc + 1 : acc;
    }, 0);
};
