var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var ItemSchema = new Schema ({
  name:String,
  description: String,
  price: Number
  // comments: [{type: Schema.Types.ObjectId, ref: 'Comment'}]
});

var Item = mongoose.model("Item", ItemSchema);
module.exports = Item;
