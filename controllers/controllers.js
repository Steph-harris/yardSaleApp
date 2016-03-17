var express = require("express");
var router = express.Router();
var bodyParser = require("body-parser");
var logger = require("morgan");
var db = require("../config/connection.js");

router.use(express.static('public'));

router.use(logger('dev'));
router.use(bodyParser.urlencoded({
  extended: false
}));

router.get("/", function(req, res){
  res.render(process.cwd()+ "/index.html");
});

module.exports = router;
