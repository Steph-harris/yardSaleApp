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
router.use(bodyParser.json());

//DB Models to use
var User = require("../models/User.js");
var Item = require("../models/Item.js");
// var Comment = require("../models/Comment.js");

//ROUTES
router.get("/", function(req, res){
  res.render(process.cwd()+ "/index.html");
});

//get all items for sale in db
router.get("/items", function(req,res){
  Item.find(function(err, docs){
    if(err){
      console.log(err);
      res.send(err);
    } else {
      res.send(docs);
    }
  });
});
//check db for user, either login or create
router.post("/login", function(req, res){
  req.body.username = req.body.username.toLowerCase().trim();
  console.log(req.body);
  User.findOne({
    username: req.body.username
  }).exec(function(err, result){
    if(err){
      console.log(err);
    } else {
      if (result === null) {
        var newUser = new User(req.body);
        newUser.save(function(err, newUser){
          console.log("User created: " + newUser);
          res.send(newUser);
        });
      } else {
      console.log(result);
      res.send(result);
      }
    }
  });
});

//create new item
router.post("/items", function(req, res){
  console.log(req.body);
  var newItem = new Item(req.body);
  newItem.save(function(err, result){
    if(err){
      throw err;
    } else {
    res.send(result)
    }
  });
});

//add comment to an item

module.exports = router;
