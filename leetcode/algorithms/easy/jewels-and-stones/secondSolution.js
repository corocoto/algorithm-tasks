// Link on the task: https://leetcode.com/problems/jewels-and-stones/description/

/**
 * @param {string} jewels
 * @param {string} stones
 * @return {number}
 */
var numJewelsInStones = function(jewels, stones) {
    let count = 0;
    for (let i = 0; i < stones.length; i++) {
        jewels.includes(stones[i]) && count++;
    }
    
    return count;
};
