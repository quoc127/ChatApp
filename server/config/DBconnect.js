import mongoose from "mongoose";

export const DBconnect = async () => {
  try {
    await mongoose.connect(process.env.MONGO_CONNECT_URL);
    console.log("Connection Database Successfuly");
  } catch (error) {
    console.log("Connection Database Error", error);
  }
};
