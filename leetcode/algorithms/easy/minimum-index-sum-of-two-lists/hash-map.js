// Link on the task: https://leetcode.com/problems/minimum-index-sum-of-two-lists/description/

/**
 * @param {string[]} list1
 * @param {string[]} list2
 * @return {string[]}
 */
var findRestaurant = function(list1, list2) {
    const commonStringMap = new Map();

    for (let i = 0; i < list1.length; i++) {
        const str = list1[i];
        const j = list2.indexOf(str);

        if (j !== -1) {
            commonStringMap.set(str, i + j);
        }
    }

    let result = [];
    let min = Infinity;
    for (const [str, sum] of commonStringMap) {
        if (sum < min) {
            result = [str];
            min = sum;
        } else if (sum === min) {
            result.push(str);    
        }
    }

    return result;
};
