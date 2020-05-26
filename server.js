const express = require("express");
const bodyParser = require("body-parser");

const auth = require("./routes/auth");

const app = express();
app.use(bodyParser.json());

// app.get("/", home);

const public = __dirname + "/public";
app.use("/", express.static(public));
app.use("/error", express.static(public + "/error.html"));
app.use("/login", auth);

app.listen(3000);
console.log("App is running on 3000");
