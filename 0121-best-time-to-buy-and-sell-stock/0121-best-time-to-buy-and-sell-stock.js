/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let minBuyPrice=prices[0], maxProfit=0  
    for(let i=0; i<prices.length;i++){
        let sellPrice = prices[i]
        maxProfit = Math.max(maxProfit,sellPrice-minBuyPrice)
        minBuyPrice = Math.min(prices[i], minBuyPrice)
    }
    
    return maxProfit
};