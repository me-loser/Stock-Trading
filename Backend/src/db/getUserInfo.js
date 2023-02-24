import { getUser } from "./getUser";
import { getCurrentSharePrice } from "./getCurrentSharePrice";

export const getUserInfo = async (stockHistory) => {
  const currentSharePrice = getCurrentSharePrice(stockHistory);
  const { cashValue, numberOfSharesOwned } = await getUser();
  const sharesValue = currentSharePrice * numberOfSharesOwned;
  return {
    cashValue,
    numberOfSharesOwned,
    sharesValue,
  };
};
