import Express from "express";
import mongoose from "mongoose";

const app = Express()
mongoose.set('strictQuery', true)
try {
    await mongoose.connect('mongodb+srv://shubhamkanase:shubhamsk@cluster0.rmw4sow.mongodb.net/?retryWrites=true&w=majority&dbname=WorkFlex');
    console.log("mongodb connected")
  } catch (error) {
    handleError(error);
  }


app.listen(8800, () => {
    console.log("running bachend server");
})