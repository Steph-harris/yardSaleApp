var mongoose = require("mongoose");
var Schema = mongoose.Schema;

CommentSchema = new Schema ({
  _owner: {type: Schema.Types.ObjectId, ref: 'User'},
  _item: {type: Schema.Types.ObjectId, ref: 'Item'},
  comment: String
});

var Comment = mongoose.model("Comment", CommentSchema);
module.exports = Comment;
