// Link on the task: https://leetcode.com/problems/group-anagrams/description/

/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    const anagramsMap = new Map();

    for (const str of strs) {
        const sortedStr = insertionSort(str);
        const anagramsArray = anagramsMap.get(sortedStr) ?? [];
        anagramsArray.push(str);

        anagramsMap.set(sortedStr, anagramsArray);
    }

    return [...anagramsMap.values()];
};

function insertionSort(str) {
    const arrayStr = Array.from(str);
    for (let i = 1; i < arrayStr.length; i++){
        let currentIndex = i;
        while (currentIndex > 0 && arrayStr[currentIndex - 1] > arrayStr[currentIndex]) {
            [
                arrayStr[currentIndex], 
                arrayStr[currentIndex - 1]    
            ] = [
                arrayStr[currentIndex - 1], 
                arrayStr[currentIndex]
            ];
            currentIndex -= 1;
        }
    }
    return arrayStr.join('');
}
