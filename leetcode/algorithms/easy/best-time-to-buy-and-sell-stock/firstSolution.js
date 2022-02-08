/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let buy = prices[0];
    let result = 0;
    for (let i = 1; i < prices.length; i++) {
        const calc = prices[i] - buy;
        if (calc >= 0 && result < calc) {
            result = calc;
        } else if (buy > prices[i]){
            buy = prices[i];
        }
    }
    return result;
}