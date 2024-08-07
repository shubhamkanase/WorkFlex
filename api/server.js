import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import authRoute from "./routes/auth.route.js";
import userRoute from "./routes/user.route.js";
import gigRoute from "./routes/gig.route.js";
import conversationRoute from "./routes/conversation.route.js";
import messageRoute from "./routes/message.route.js";
import orderRoute from "./routes/order.route.js";
import reviewRoute from "./routes/review.route.js";
import cookieParser from "cookie-parser";
import cors from "cors";

const app = express()
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

// const production = 'https://workflexx.netlify.app';
// const localhost = 'http://localhost:5173/'
app.use(cors({
  origin: 'https://workflexx.netlify.app',
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  credentials: true,
}));

app.use(express.json());
app.use(cookieParser());

app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);
app.use("/api/gigs", gigRoute);
app.use("/api/orders", orderRoute);
app.use("/api/conversations", conversationRoute);
app.use("/api/messages", messageRoute);
app.use("/api/reviews", reviewRoute);

app.use((err, req, res, next) => {
  const errorStatus = err.status || 500;
  const errorMessage = err.Message || "something went wrong!";

  return res.status(errorStatus).send(errorMessage);

});

app.listen(8800, () => {
  connect()
  console.log("running backend server");
})    