import express from "express";
import mongoose from "mongoose";
import router from "./src/Routes.js";

import bodyParser from "body-parser";
const app = express();

app.use(bodyParser.json());

const connectDB = (url) => {
  mongoose.set("strictQuery", true);

  mongoose
    .connect(url)
    .then(() => console.log("MongoDB connected"))
    .catch((error) => console.log(error));
};

const StartServer = async () => {
  try {
    connectDB(process.env.MONGODB_STRING || "mongodb+srv://awaizkhanmd:9959198231@cluster0.jnaj01l.mongodb.net/?retryWrites=true&w=majority")
    app.listen(process.env.PORT || 4000, () => {
      console.log("Express running on PORT: " + (process.env.PORT || 4000));
    });
  } catch (error) {
    console.log(error);
  }
}
StartServer();

app.use('/', router);

