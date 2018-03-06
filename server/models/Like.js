const mongoose = require('mongoose');

const LikeSchema = new mongoose.Schema({  
  rel: {type: mongoose.Schema.Types.ObjectId, ref:'Publication'}
});

const Like = mongoose.model('Like', LikeSchema);

module.exports = Like;