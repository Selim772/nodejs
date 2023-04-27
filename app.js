const express = require("express");
const path = require("path");

const app = express();

app.use(express.json());
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

const router = require("./app/routes/index.js");
app.use("/api", router);

const db = require("./app/models/index.js");
db.sequelize
  .authenticate()
  .then(() => console.log("Database connected ..."))
  .catch((err) => console.log(err));

module.exports = app;
