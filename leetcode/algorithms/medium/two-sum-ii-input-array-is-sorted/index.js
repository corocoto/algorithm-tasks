/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(numbers, target) {
    let i = 0;
    let j = numbers.length - 1;

    while (numbers[i] + numbers[j] !== target) {
        if (numbers[i] + numbers[j] > target) {
            j--;
        } else {
            i++;
        }
    }

    return [i + 1, j + 1];
};
