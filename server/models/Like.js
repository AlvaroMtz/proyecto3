const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

const likeSchema = new Schema({
  name: String,
  publication: { type: Schema.Types.ObjectId, ref: 'Publication', required: true },
  total: Number,
}, {
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  }
});

const Like = mongoose.model('Like', likeSchema);
module.exports = Like;