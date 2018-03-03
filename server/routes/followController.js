const express = require('express');
const router = express.Router();
const User = require('../models/User');
const Follow = require('../models/Follow')

// router.post("/", (req, res) => {
//   console.log(req.body.userId)
//   Follow.findOneAndUpdate({ upsert: true }, { 'userId': req.body.userId },
//     { $push: { following: req.body.userId } }, { 'new': true })
//     .then( (res) => res.status(200))
//     .catch(err => res.status(500).json(err))
// });

router.post("/", (req, res) => {
  console.log(req.body.userId)
  Follow.findOneAndUpdate( { 'userId': req.body.userId }, { upsert: true } ,
    { $push: { following: req.body.userId } }, { 'new': true }, function(err, doc){
      if (err) return res.status(500, { error: err });
      return res.status(200);
    });
});
module.exports = router;



