const mongoose = require("mongoose");
const Schema = mongoose.Schema;
//posts schema that is added to the backend that can be acccessed through GraphQL
const PostSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  author: {
    type: Schema.Types.ObjectId,
    ref: "user"
  },
  body: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('post', PostSchema);