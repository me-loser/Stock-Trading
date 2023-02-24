import { db } from "./db";
import dotenv from "dotenv";
dotenv.config();
export const sellStock = async (numberOfShares, currentSharePrice) => {
  const cost = numberOfShares * currentSharePrice;

  await db.connect(process.env.MONGODB_URL);
  await db
    .getConnection()
    .collection("users")
    .updateOne(
      {},
      {
        $inc: {
          numberOfSharesOwned: -numberOfShares,
          cashValue: cost,
        },
      }
    );
};
