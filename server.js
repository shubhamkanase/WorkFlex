import Express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";

const app = Express()
dotenv.config();
mongoose.set('strictQuery', true);

const connect = async () => {

  try {
    await mongoose.connect(process.env.MANGO);
    console.log("connecte to mongodb")
  } catch (error) {
    console.log(error);
  }
}

app.listen(8800, () => {
  connect()
  console.log("running backend server");
}) 