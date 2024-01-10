// Link on the task: https://leetcode.com/problems/group-anagrams/

/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
    const hashMap = {};

    for (const str of strs) {
        const sortedStr = str.split('').sort().join('');

        if (typeof hashMap[sortedStr] === 'undefined') {
            hashMap[sortedStr] = [];
        } 

        hashMap[sortedStr].push(str);
    }

    return Object.values(hashMap);
};
