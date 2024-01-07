const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const userRoutes = require("./Routes/UserRouter");

dotenv.config();
mongoose.connect(process.env.URL, console.log("connect"));

const app = express();

app.use(express.json());
app.get("/", (req, res) => {
  res.send("server running");
});
app.use("/user", userRoutes);

app.listen(
  process.env.PORT,
  console.log(`server listening on port ${process.env.PORT}`)
);
