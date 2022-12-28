// Link on the task: https://leetcode.com/problems/count-items-matching-a-rule/description/

/**
 * @param {string[][]} items
 * @param {string} ruleKey
 * @param {string} ruleValue
 * @return {number}
 */
var countMatches = function(items, ruleKey, ruleValue) {
    return items.reduce((acc, [type, color, name]) => {
        if(
            (ruleKey === 'type' && type === ruleValue) || 
            (ruleKey === 'color' && color === ruleValue) ||
            (ruleKey === 'name' && name === ruleValue)
        ){
            acc++
        }
        return acc;
    }, 0);
};
