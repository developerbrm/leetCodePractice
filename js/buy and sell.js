var maxProfit = function (prices) {
  let maxProfit = 0;
  let minPrice = Infinity;

  prices.forEach((currentPrice) => {
    if (currentPrice < minPrice) minPrice = currentPrice;
    else if (currentPrice - minPrice > maxProfit)
      maxProfit = currentPrice - minPrice;
  });

  return maxProfit;
};

console.log(maxProfit([7, 1, 5, 3, 6, 4]));
console.log(maxProfit([7, 6, 4, 3, 1]));
