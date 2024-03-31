// Link on the task: https://leetcode.com/problems/reverse-prefix-of-word/

/**
 * @param {string} word
 * @param {character} ch
 * @return {string}
 */
var reversePrefix = function(word, ch) {
    const length = word.length;
    let i = 0;
    let j = 0;

    while (i !== length) {
        if (word[i] === ch) {
            break;
        }
        i++;
    }


    while (i > j && i !== length) {
         word = word.slice(0, j) + word[i] + word.slice(j + 1, i) + word[j] + word.slice(i + 1);
         i--;
         j++;
    }

    return word;
};
