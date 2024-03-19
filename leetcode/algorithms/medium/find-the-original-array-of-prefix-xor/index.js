/**
 * @param {number[]} pref
 * @return {number[]}
 */
var findArray = function (pref) {
    let i = 0;
    const result = [pref[i]];

    while (result.length !== pref.length) {
        const calculation = pref[i] ^ pref[i + 1];
        result.push(calculation);
        i++;
    }

    return result;
};
