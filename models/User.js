var mongoose = require("mongoose");
var Schema = mongoose.Schema;

//Users will have items and comments
var UserSchema = new Schema ({
  username: String,
  password: String,
  money: Number,
  collectedItems: [{type: Schema.Types.ObjectId, ref: 'Item'}],
  comments: [{type: Schema.Types.ObjectId, ref: 'Comment'}]
});

var User = mongoose.model("User", UserSchema);
module.exports = User;
