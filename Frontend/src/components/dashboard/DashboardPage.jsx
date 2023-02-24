import { useStockHistory } from "../stock-history/useStockHistory";
import { useUserInfo } from "../user/useUserInfo";
import StockChart from "./StockChart";
import { useState } from "react";

const DashboardPage = () => {
  const [numberOfSharesValue, setNumberOfSharesValue] = useState(0);
  const [userInfo, setUserInfo] = useUserInfo();
  const { cashValue, sharesValue, numberOfSharesOwned } = userInfo || {};
  const stockHistory = useStockHistory();
  const times = Object.keys(stockHistory);
  const prices = Object.values(stockHistory);

  const buyShares = async () => {
    if (numberOfSharesValue <= 0) return;
    const response = await fetch("http://localhost:8080/stocks/buy", {
      method: "post",
      body: JSON.stringify({ numberOfShares: numberOfSharesValue }),
      headers: { "Content-Type": "application/json" },
    });
    const updatedUserInfo = await response.json();
    setUserInfo(updatedUserInfo);
  };

  const sellShares = async () => {
    if (numberOfSharesValue <= 0) return;
    const response = await fetch("http://localhost:8080/stocks/sell", {
      method: "post",
      body: JSON.stringify({ numberOfShares: numberOfSharesValue }),
      headers: { "Content-Type": "application/json" },
    });
    const updatedUserInfo = await response.json();
    setUserInfo(updatedUserInfo);
  };

  return (
    <>
      <h1 className="section-heading">Stock Trading App</h1>
      <div className="centered-container">
        <StockChart xValues={times} yValues={prices} />
        <div className="financial-info-section">
          <div className="info-item">
            Current TSLA Share Price: ${prices[0]}
          </div>
          <div className="info-item">
            You currently own {numberOfSharesOwned} shares
          </div>
          <div className="info-item">Cash Balance: ${cashValue}</div>
          <div className="info-item">Portfolio Value: ${sharesValue}</div>
          <div className="info-item">
            Total Value: ${cashValue + sharesValue}
          </div>
          <div>
            <input
              type="number"
              className="full-width space-after"
              value={numberOfSharesValue}
              onChange={(e) => setNumberOfSharesValue(e.target.value)}
            />
            <button className="buy-button" onClick={buyShares}>
              Buy
            </button>
            <button className="sell-button" onClick={sellShares}>
              Sell
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default DashboardPage;
