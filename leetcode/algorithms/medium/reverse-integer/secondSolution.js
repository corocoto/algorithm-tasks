// Link on the task: https://leetcode.com/problems/reverse-integer/description/

/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    let reverseNum = 0;
    const limit = 0x7FFFFFFF;
    const isLessThanZero = x < 0;
    x = Math.abs(x);
    while (x) {
        reverseNum = reverseNum * 10 + (x % 10);
        x = Math.floor(x / 10);
    }
    if (reverseNum > limit){
        return 0 ;
    }
    return isLessThanZero ? -reverseNum : reverseNum;
};
