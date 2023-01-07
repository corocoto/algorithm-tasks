// Link on the task: https://leetcode.com/problems/unique-morse-code-words/description/

/**
 * @param {string[]} words
 * @return {number}
 */
var uniqueMorseRepresentations = function(words) {
    const aCharCode = 97;

    const morseCode = [".-","-...","-.-.","-..",".","..-.","--.","....","..",".---","-.-",".-..","--","-.","---",".--.","--.-",".-.","...","-","..-","...-",".--","-..-","-.--","--.."];

    return words.reduce((acc, word) => {
        let morseValue = '';
        for (let i = 0; i < word.length; i++) {
            const charCode = word.charCodeAt(i);
            morseValue += morseCode[charCode - aCharCode];
        } 

        !acc.includes(morseValue) && acc.push(morseValue);

        return acc;
    }, []).length;
};
