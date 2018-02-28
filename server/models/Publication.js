const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

const publicationSchema = new Schema({
  name: String,
  userId: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  //image here
  text: String,
}, {
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  }
});

const Publication = mongoose.model('Publication', publicationSchema);
module.exports = Publication;