const express = require('express');
const router = express.Router();
const User = require('../models/User');
const Follow = require('../models/Follow')


router.post('/', (req, res, next) => {
  let currentId = req.body.currentId
  let userId = req.body.userId
  Follow.findOne({ userId: userId })
    .then((user) => {
      let updatedUser = user;
      updatedUser.followingID.push(currentId)
      Follow.findOneAndUpdate({ userId: userId }, updatedUser, { $new: true })
        .then(publi => res.status(200).json(publi))
    })
    .catch(err => res.status(500).json(err))
});

router.post('/new', (req, res, next) => {
  const newFollow = new Follow({
    userId: req.body.userId
  });
  newFollow.save()
    .then(publi => res.status(200).json(publi))
    .catch(err => res.status(500).json(err))
});

module.exports = router;



