// Link on the task: https://leetcode.com/problems/isomorphic-strings/description/

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function(s, t) {
    const sMap = new Map();
    const tMap = new Map();

    for (let i = 0; i < s.length; i++) {
        const sChar = s[i];
        const tChar = t[i];

        const sCharValue = sMap.get(sChar) ?? { count: 0, indexes: [] };
        const tCharValue = tMap.get(tChar) ?? { count: 0, indexes: [] };

        sCharValue.count += 1;
        sCharValue.indexes.push(i);

        tCharValue.count += 1;
        tCharValue.indexes.push(i);

        sMap.set(sChar, sCharValue);
        tMap.set(tChar, tCharValue);
    }

    for (const [sChar, sCharValue] of sMap) {
        for (const [tChar, tCharValue] of tMap) {
            if (
                sCharValue.count === tCharValue.count && 
                JSON.stringify(sCharValue.indexes) === JSON.stringify(tCharValue.indexes)
            ) {
                tMap.delete(tChar);
                break;
            }
        }
    }

    return tMap.size === 0
};
