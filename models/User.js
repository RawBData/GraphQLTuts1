const mongoose = require("mongoose");
const Schema = mongoose.Schema;
//User schema that is added to the backend that can be acccessed through GraphQL 
//make sure to set types based on already built in settings
const UserSchema = new Schema({
    name: {
      type: String,
      required: true
    },
    email: {
      type: String,
      required: true
    },
    password: {
      type: String,
      required: true
    },
    date: {
      type: Date,
      default: Date.now
    },
    posts: [{
        type: Schema.Types.ObjectId,
        ref: 'post'
    }]
  })

  module.exports = mongoose.model('user', UserSchema);