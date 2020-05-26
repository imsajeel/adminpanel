const express = require("express");
const Router = express.Router();
const mysqlConnection = require("../connection");
const requestIp = require("request-ip");

Router.use(requestIp.mw());

Router.get("/", (req, res) => {
  const ip = req.clientIp;
  res.send("Your IP is " + ip);
});

module.exports = Router;
