const express = require('express');
const router = express.Router();
const User = require('../models/User');
const Follow = require('../models/Follow')


router.post('/', (req, res, next) => {
  let currentId = req.body.currentId
  let userId = req.body.userId
  console.log(this.userId)
  Follow.findOne({ userId: userId })
    .then((user) => {
      let updatedUser = user;
      updatedUser.followingID.push(currentId)
      Follow.findOneAndUpdate({ userId: userId }, updatedUser, { $new: true })
        .then(publi => res.status(200).json(publi))
    })
    .catch(err => res.status(500).json(err))
  Follow.findOne({ userId: currentId })
  .then((user) => {
    let updatedUser = user;
    updatedUser.followerID.push(userId)
    Follow.findOneAndUpdate({ userId: currentId }, updatedUser, { $new: true })
      .then(publi => res.status(200).json(publi))
  })
  .catch(err => res.status(500).json(err))
});


module.exports = router;



