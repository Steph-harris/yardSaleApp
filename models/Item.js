var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var ItemSchema = new Schema ({
  _owner: [{type: Schema.Types.ObjectId, ref: 'User'}],
  name:String,
  description: String,
  price: Number,
  sold: Boolean,
  comments: [{type: Schema.Types.ObjectId, ref: 'Comment'}]
});

var Item = mongoose.model("Item", ItemSchema);
module.exports = Item;
