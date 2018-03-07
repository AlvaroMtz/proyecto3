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
  Follow.findOne({ userId: currentId })
  .then((user) => {
    let updatedUser = user;
    updatedUser.followerID.push(userId)
    Follow.findOneAndUpdate({ userId: currentId }, updatedUser, { $new: true })
      .then(publi => res.status(200).json(publi))
  })
  .catch(err => res.status(500).json(err))
});

// router.get('/:id', (req, res, next)=>{
//     let userI
//     Follow.findOne({ userId:req.params.id }).populate('followingID')
//         .then(followers => {
//                     res.status(200).json(followers)
//             })
//         .catch(err=>res.status(500).json(err))
// });

router.get('/', (req, res, next) => {
  Follow
      .find({})
      .populate('followingID')
      .populate('followerID')
      .then(follower => {
        console.log("----------------->Entro")
          res.status(200).json(follower);
      })
});

module.exports = router;



