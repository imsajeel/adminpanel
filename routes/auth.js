const express = require("express");
const Router = express.Router();
const mysqlConnection = require("../connection");

Router.get("/", (req, res) => {
  res.send("Your IP is ");
});

module.exports = Router;
