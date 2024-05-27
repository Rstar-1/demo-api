//packages import
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const express = require("express");

//env import
dotenv.config({ path: ".env" });

//express import
var app = express();

//db connect
require("./db/conn");

//route import
const mainroute = require("./routes/Index");

//package import
const cors = require("cors");
const cookiParser = require("cookie-parser");

//Port define
const PORT = process.env.PORT || 8080;

//Create Server
app.get("/", (req, res) => {
  res.status(201).json(`server Created`);
});

//packages
app.use(express.json());
app.use(cookiParser());
app.use(cors());

//images
app.use("/uploads", express.static("./uploads"));
app.use("/files", express.static("./public/files"));

//main routes
mainroute(app);

//port on 8000
app.listen(PORT, () => {
  console.log(`server on ${PORT}`);
});

