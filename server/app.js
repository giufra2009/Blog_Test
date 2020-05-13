const express = require("express");
const mongoose = require("mongoose");

const blogRoutes = require("./routes/blog-routes");

const app = express();

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-control-Allow-Headers",
    "Origin,X-Requestes-With,Content-Type,Accept,Authorization"
  );

  res.setHeader("Access-Control-Allow-Methods", "GET", "POST");
  next();
});

app.use("/api/posts", blogRoutes);

app.use((error, req, res, next) => {
  if (res.headerSent) {
    return next(error);
  }
  res
    .status(error.code || 500)
    .json({ message: error.message || "An unknown error occurred!" });
});

const uri = `mongodb://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0-shard-00-00-ywfdn.mongodb.net:27017,cluster0-shard-00-01-ywfdn.mongodb.net:27017,cluster0-shard-00-02-ywfdn.mongodb.net:27017/${process.env.DB_NAME}?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true&w=majority`;

mongoose
  .connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    app.listen(process.env.PORT || 5000);
  })
  .catch((err) => {
    console.log(err);
  });
