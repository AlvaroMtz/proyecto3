const express = require('express');
const router = express.Router();
const User = require('../models/User');

router.post("/:id", (req, res) => {
    follower: req.body.currentId
      User
        .findOne({ "id": req.user._id, follower })
        .exec((err, currentUser, follower) => {
          var followingIndex = currentUser.following.indexOf(follow._id);
  
          if (followingIndex > -1) {
            currentUser.following.splice(followingIndex, 1)
          } else {
            currentUser.following.push(follower);
          }
  
          currentUser.save((err) => {
            req.user.username = currentUser;
            res.status(200).json(currentUser);
          });
        });
    });



module.exports = router;