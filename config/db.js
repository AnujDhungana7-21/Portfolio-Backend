import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();
export const connectMongo = mongoose
  .connect(process.env.mongoHttps, {})
  .then(() => console.log("MongoDb Connected!!!"))
  .catch((err) => {
    console.log("MongoDb failed!!!");
  });
