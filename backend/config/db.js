import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();
const dbURL = process.env.MONGO_URL;

const connectDB = async () => {
  await mongoose
    .connect(dbURL)
    .then(() => {
      console.log("db connected");
    })
    .catch((error) => console.log(error));
};

export { connectDB };
