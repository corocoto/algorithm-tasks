// Link on the task: https://leetcode.com/problems/find-all-anagrams-in-a-string/
/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
var findAnagrams = function (s, p) {
    const result = [];

    const sLength = s.length;
    const pLength = p.length;

    if (sLength < pLength) {
        return result;
    }

    const charsHashMap = {};
    for (const char of p) {
        charsHashMap[char] ??= 0;
        charsHashMap[char] += 1;
    }

    let left = 0;
    let right = 0;
    let count = pLength;

    while(right < sLength) {
        const rightChar = s[right];

        if (charsHashMap[rightChar] > 0) {
            count--;
        }

        charsHashMap[rightChar]--;
        right++;

        if (count === 0) {
            result.push(left);
        }

        if (right - left === pLength) {
            const leftChar = s[left];

            if (charsHashMap[leftChar] >= 0) {
                count++;
            }

            charsHashMap[leftChar]++;
            left++;
        }
    }
  
    return result;
};
