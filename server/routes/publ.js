const express = require('express');
const router = express.Router();
const User = require('../models/User');
const Publication = require('../models/Publication')
const Coment = require('../models/Coment')

//Get all
router.get('/', (req, res, next) => {
    Publication
        .find({})
        .populate('userId')
        .then(publications => {
            res.status(200).json(publications);
        })
});

//Get One
router.get('/publication/:id', (req, res, next) => {
    const publications = req.params.id;
    Publication.findById(req.params.id).populate('userId')
        .then(publications => {
            Coment.find({ "publication_id": publications })
                .populate("userId")
                .then(c => {
                    res.status(200).json(publications)
                })
            })
        .catch(err=>res.status(500).json(err))
});
router.get('/user-publication/:id', (req, res, next) => {
    const publications = req.params.id;
    Publication.find({userId:req.params.id}).populate('userId')
        .then(publications => {
            res.json(publications)
        })
});

//New pub
router.post('/', (req, res, next) => {
    const newPublication = new Publication({
        title: req.body.title,
        text: req.body.text,
        userId: req.body.userId,
        resume: req.body.resume,
        lat: req.body.lat,
        lng: req.body.lng
    });
    newPublication.save()
        .then(publi=>res.status(200).json(publi))
        .catch(err=>res.status(500).json(err))
});

//Edit pub
router.put('/:id', (req, res, next) => {
    const updates = {
        title: req.body.title,
        text: req.body.text,
    };

    Publication.findByIdAndUpdate(req.params.id, updates, {new: true})
        .then(publi=>res.status(200).json(publi))
        .catch(err =>res.status(500).json(err))
});

//Get comments

router.get('/:id/coment', (req, res, next) => {
    console.log(req.params.id)
    const publications = req.params.id;
    Coment.find({publication_id :req.params.id}).populate('creatorid')
        .then(coments => {
            res.json(coments)
        })
});

//Post comments
router.post('/:id/coment', (req, res, next) => {
    console.log(req.body.description)
    const newComent = new Coment({
        description: req.body.description,
        creatorid: req.body.creatorId,
        publication_id: req.params.id,
    });
    newComent.save((err, com) => {
        console.log(com)
        if (err) {
            res.status(500).json(err)
        } else {
            return res.status(200).json(com);
        }
    });
});


// router.delete('/edit/:id', function (req, res, next) {

// });

module.exports = router;