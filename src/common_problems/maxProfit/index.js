export function maxProfit(prices) {
    let profit = 0,
        i = 0;

    while (i < prices.length) {
        let j = i;

        let minPrice = prices[j];
        while (j < prices.length && prices[j + 1] < prices[j]) {
            j++;
            minPrice = prices[j];
        }

        j++;
        let maxPrice = prices[j];
        while (j < prices.length && prices[j + 1] > prices[j]) {
            j++;
            maxPrice = prices[j];
        }

        if (minPrice >= 0 && maxPrice) {
            profit += maxPrice - minPrice;
        }
        i = j + 1;
    }

    return profit;
}
