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

        const sCharIndexes = sMap.get(sChar) ?? [];
        const tCharIndexes = tMap.get(tChar) ?? [];

        sCharIndexes.push(i);
        tCharIndexes.push(i);

        sMap.set(sChar, sCharIndexes);
        tMap.set(tChar, tCharIndexes);
    }

    for (const [sChar, sCharIndexes] of sMap) {
        for (const [tChar, tCharIndexes] of tMap) {
            if (JSON.stringify(sCharIndexes) === JSON.stringify(tCharIndexes)) {
                tMap.delete(tChar);
                break;
            }
        }
    }

    return tMap.size === 0
};
