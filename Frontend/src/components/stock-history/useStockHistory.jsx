import { useState, useEffect } from "react";

const zip = (keys, values) =>
  keys.reduce(
    (acc, key, i) => ({
      ...acc,
      [key]: values[i],
    }),
    {}
  );

export const useStockHistory = () => {
  const [stockHistory, setStockHistory] = useState([]);
  useEffect(() => {
    const loadStockHistory = async () => {
      const response = await fetch("http://localhost:8080/stock-history");
      const fullHistory = await response.json();
      const times = Object.values(fullHistory["values"]).map(
        (obj) => obj.datetime
      );
      const price = Object.values(fullHistory["values"]).map(
        (obj) => obj.close
      );

      setStockHistory(zip(times, price));
    };

    loadStockHistory();
  }, []);
  return stockHistory;
};
