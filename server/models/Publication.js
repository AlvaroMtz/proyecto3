const mongoose = require('mongoose');
const Schema   = mongoose.Schema;


const publicationSchema = new Schema({
  title: String,
  userId: { type: Schema.Types.ObjectId, ref: 'User'},
  resume: String,
  lat: Number,
  lng: Number,
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