import { loadStockHistory } from "./loadStockHistory";

export const createRefreshStockPricesTask = (symbol) => ({
  frequency: 300000,
  handler: async (app) => {
    try {
      console.log("Refershing stock history data...");
      const updatedStockHistory = await loadStockHistory(symbol);
      app.locals.stockHistory = await updatedStockHistory;
      // this stockHistory can be used inside the route by using req.app.locals.stockHistory
      // This is the way to make availablw stockHistory to all the endpoints
    } catch (e) {
      console.log("Unable to refresh stock history data");
      console.log(e);
    }
  },
});
