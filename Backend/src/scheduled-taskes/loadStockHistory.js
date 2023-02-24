import dotenv from "dotenv";
dotenv.config();

export const loadStockHistory = async (symbol) => {
  const apiUrl =
    `https://api.twelvedata.com/time_series?` +
    `apikey=${process.env.TWELVEDATA_API_KEY}` +
    `&interval=30min` +
    `&symbol=${symbol}` +
    `&format=JSON`;
  const response = await fetch(apiUrl);
  const history = await response.json();
  return history;
};
