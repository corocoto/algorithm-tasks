/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let maxProfit = 0;
    let buy = prices[0];
    for (let i = 1; i < prices.length; i++) {
        const currentPrice = prices[i];
        maxProfit = Math.max(maxProfit, currentPrice - buy);
        buy = Math.min(buy, currentPrice);
    }
    return maxProfit;
}