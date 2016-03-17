var express = require("express");
var app = express();
var mongoose = require("mongoose");
var PORT = process.env.PORT || 8080;

var routes = require("./controllers/controllers.js");

app.use(routes);

app.listen(PORT, function(){
  console.log("Listening on port %s", PORT);
});
