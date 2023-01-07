// Link on the task: https://leetcode.com/problems/unique-morse-code-words/description/

/**
 * @param {string[]} words
 * @return {number}
 */
var uniqueMorseRepresentations = function(words) {
    const aCharCode = 97;

    const morseCode = [".-","-...","-.-.","-..",".","..-.","--.","....","..",".---","-.-",".-..","--","-.","---",".--.","--.-",".-.","...","-","..-","...-",".--","-..-","-.--","--.."];

    let k = 0;
    for (let i = 0; i < words.length; i++) {
        const word = words[i];
        let morseValue = '';

        for (let j = 0; j < word.length; j++) {
            const charCode = word.charCodeAt(j);
            morseValue += morseCode[charCode - aCharCode];
        }

        !words.includes(morseValue) && k++;
        words[i] = morseValue;
    }

    return k;
};
