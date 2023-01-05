// Link on the task: https://leetcode.com/problems/replace-elements-with-greatest-element-on-right-side/description/

/**
 * @param {number[]} arr
 * @return {number[]}
 */
var replaceElements = function(arr) {
    let maxValue = 0;
    for (let i = arr.length - 1; i >= 0; i--){
        [
            arr[i], 
            maxValue
        ] = [
            i === arr.length - 1 
                ? -1 
                : maxValue, 
            Math.max(arr[i], maxValue)
        ];
    }

    return arr;
};
