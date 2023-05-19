import mongoose from "mongoose";

mongoose.set("strictQuery", true);

const connectDb = async () => {
  // await mongoose.connect("mongodb://localhost/stocks-app");
  await mongoose.connect(
    "mongodb+srv://Tareez:Ghandour@stocks.memk9pu.mongodb.net/"
  );
};
export { connectDb };
