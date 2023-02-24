export const getCurrentSharePrice = (stockHistory) => {
  const mostRecentPriceObject = Object.values(stockHistory.values)[0];
  const currentPrice = mostRecentPriceObject.close;
  return currentPrice;
};
