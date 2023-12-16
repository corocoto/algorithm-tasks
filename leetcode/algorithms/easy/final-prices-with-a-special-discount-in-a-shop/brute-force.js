// Link on the task: https://leetcode.com/problems/final-prices-with-a-special-discount-in-a-shop/description/

/**
 * @param {number[]} prices
 * @return {number[]}
 */
var finalPrices = function(prices) {
    const answer = [];
    const length = prices.length;

    for (let i = 0; i < length; i++) {
        const price = prices[i];
        let discount = 0;

        for (let j = i + 1; j < length; j++) {
            if (prices[j] <= price) {
                discount = prices[j];
                break;
            }
        }

        answer.push(price - discount);
    }

    return answer;
};
