// Link on the task: https://leetcode.com/problems/best-time-to-buy-and-sell-stock/description/

/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let [min, ...restPrices] = prices;

    return restPrices.reduce((accumulator, price) => {
        const result = Math.max(price - min, accumulator);
        min = Math.min(min, price);
        return result;
    }, 0);
};
