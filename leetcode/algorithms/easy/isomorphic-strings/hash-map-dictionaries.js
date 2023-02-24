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

        if (!sMap.has(sChar) && !tMap.has(tChar)) {
            sMap.set(sChar, tChar);
            tMap.set(tChar, sChar);
            continue;
        } 
        
        if (sMap.get(sChar) !== tChar || tMap.get(tChar) !== sChar) {
            return false;
        }
    }

    return true;
};
