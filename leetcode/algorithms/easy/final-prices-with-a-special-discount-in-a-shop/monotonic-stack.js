// Link on the task: https://leetcode.com/problems/final-prices-with-a-special-discount-in-a-shop/description/

/**
 * @param {number[]} prices
 * @return {number[]}
 */
var finalPrices = function(prices) {
    const stack = [];
    const result = []; 
    
    for (let i = prices.length - 1; i >= 0; i--) {
        while (stack.length && stack[stack.length - 1] > prices[i]) {
            stack.pop();
        }

        if (stack.length === 0) {
            result[i] = prices[i]; 
        } else {
            result[i] = prices[i] - stack[stack.length - 1];
        }

        stack.push(prices[i]);
    }

    return result;
};
