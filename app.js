const express = require("express");
var path = require('path');
const app = express();
const router = require("./app/routes/index.js");
app.use(express.json());
//Ajout des routes
app.use("/api", router);
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

const db = require("./app/models/index.js");
db.sequelize
  .authenticate()
  .then(() => console.log("Database connected ..."))
  .catch((err) => console.log(err));
module.exports = app;
