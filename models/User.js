var mongoose = require("mongoose");
var Schema = mongoose.Schema;

//Users will have items and comments
var UserSchema = new Schema ({
  username: String,
  password: String
});

var User = mongoose.model("User", UserSchema);
module.exports = User;
