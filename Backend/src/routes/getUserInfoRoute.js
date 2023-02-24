import { getUserInfo } from "../db/getUserInfo";

export const getUserInfoRoute = {
  method: "get",
  path: "/user-info",
  handler: async (req, res) => {
    const stockHistory = req.app.locals.stockHistory;
    const userInfo = await getUserInfo(stockHistory);
    res.status(200).json(userInfo);
  },
};
