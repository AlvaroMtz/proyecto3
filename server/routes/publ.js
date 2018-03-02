const express = require('express');
const router = express.Router();
const User = require('../models/User');
const Publication = require('../models/Publication')

//Get all
router.get('/', (req, res, next) => {
    Publication
        .find({})
        .populate('userId')
        .then(publications => {
            res.status(200).json(publications);
        })
});

//Get One FALTAN POR IMPLEMENTAR LOS COMENTARIOS
router.get('/publication/:id', (req, res, next) => {
    const publications = req.params.id;
    Publication.findById(req.params.id).populate('userId')
        .then(publications => {
            // Coment.find({ "publication_id": publication })
            //     .populate("userId")
            //     .then(c => {
                    res.status(200).json(publications)
                // })
        })
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
        userId: req.body.userId
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
    Publication.findById(req.params.id, (err, publication) => {
        if (err) { return next(err) }
        if (!publication) { return next(new Error("404")) }
        return res.render('coments/new', { publication })
    });
});

//Post comments
router.post('/:id/coment', (req, res, next) => {
    const publication_id = req.params.id
    const newComent = new Coment({
        description: req.body.description,
        publication_id: req.body.publication_id,
        creatorid: req.body.creatorid
    });
    newComent.save((err) => {
        if (err) {
            res.status(500).json(err)
        } else {
            return res.status(200).json(req.publications);
        }
    });
});

// router.delete('/edit/:id', function (req, res, next) {

// });

module.exports = router;