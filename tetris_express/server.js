// Requiring in-built https for creating
// https server
const http = require("http");

// Express for handling GET and POST request
const express = require("express");

// Requiring file system to use local files
const fs = require("fs");

// Parsing the form of body to take
// input from forms
const bodyParser = require("body-parser");

// Configuring express to use body-parser
// as middle-ware

const st = [{ hello: "world", world: "hello" }];

const app = express();
//app.use(express.json());
//app.use(express.static("express"));
// default URL for website
app.get("/", function (req, res) {
  //res.sendFile(path.join(__dirname + "/express/index.html"));
  //__dirname : It will resolve to your project folder.
  let e = [];
  for (let i = 0; i < 10000; i++) {
    e = [...e, st];
  }

  res.json(e);
});

// Post request for geetting input from
// the form
app.post("/mssg", function (req, res) {
  // Logging the form body
  console.log(req.body);

  // Redirecting to the root
  res.redirect("/");
});

// Creating object of key and certificate
// for SSL

// Creating https server by passing
// options and app object
http.createServer(app).listen(443, function (req, res) {
  console.log("Server started at port 443");
});
