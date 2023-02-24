import { db } from "./db";
import dotenv from "dotenv";
dotenv.config();

export const getUser = async () => {
  await db.connect(process.env.MONGODB_URL);
  const user = await db.getConnection().collection("users").findOne({});
  return user;
};
