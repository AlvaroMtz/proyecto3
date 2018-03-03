const mongoose = require('mongoose');
const Schema   = mongoose.Schema;
const User = require("./User")

const followSchema = new Schema({
  userId:  { type: Schema.Types.ObjectId, ref: 'User'}, //USUARIO AL QUE PERTENECE LA COLECCIÓN
  followingID: [{ type: Schema.Types.ObjectId, ref: 'User'}], //A QUIÉN SIGUE EL USUARIO
  followerID: [{ type: Schema.Types.ObjectId, ref: 'User' }], //QUIÉN LE SIGUE AL USUARIO
}, {
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  }
});

const Follow = mongoose.model('Follow', followSchema);
module.exports = Follow;