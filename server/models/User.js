const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

const userSchema = new Schema({
  name: String,
  surname: String,
  username: String,
  password: String,
  email: String,
  followed: [{ type: Schema.Types.ObjectId, ref: 'User', required: true }],
  following: [{ type: Schema.Types.ObjectId, ref: 'User', required: true }],
  //image here
  description: String,
  short_story: String,
}, {
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  }
});

const User = mongoose.model('User', userSchema);
module.exports = User;