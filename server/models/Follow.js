const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

const followSchema = new Schema({
  userId:{ type: Schema.Types.ObjectId, ref: 'User', required: true },
  followingID: [{ type: Schema.Types.ObjectId, ref: 'User', required: true }],
  followerID: [{ type: Schema.Types.ObjectId, ref: 'User', required: true }],
}, {
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  }
});

const Follow = mongoose.model('Follow', followSchema);
module.exports = Follow;