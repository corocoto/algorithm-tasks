// Link on the task: https://leetcode.com/problems/find-unique-binary-string/description/

/**
 * @param {string[]} nums
 * @return {string}
 */
var findDifferentBinaryString = function (nums) {
    const length = nums.length;
    const decimals = nums.map((bin) => parseInt(bin, 2));

    let i = 0;
    while (i < length) {
        const int = decimals[i];

        if (int < length && int !== i) {
            [[decimals[i], decimals[int]]] = [[decimals[int], int]];
            continue;
        }
        i++;
    }

    for (i = 0; i < length; i++) {
        if (decimals[i] !== i) {
            return i.toString(2).padStart(length, '0');
        }
    }

    return length.toString(2).padStart(length, '0');
};
