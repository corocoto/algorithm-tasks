// Link on the task: https://leetcode.com/problems/reverse-vowels-of-a-string/

/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function (s) {
    const arr = [...s];
    let i = 0;
    let j = s.length - 1;
    const vowelsRegexp = /a|e|i|o|u/i;

    while (i < j) {
        const leftChar = arr[i];
        const rightChar = arr[j];
        
        if (!vowelsRegexp.test(leftChar)) {
            i++
        }

        if (!vowelsRegexp.test(rightChar)) {
            j--;
        }

        if (vowelsRegexp.test(leftChar) && vowelsRegexp.test(rightChar)) {
            [arr[i], arr[j]] = [arr[j], arr[i]];
            i++;
            j--;        
        }
    }

    return arr.join('');
};
