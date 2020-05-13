const express = require ('express')
const router = express.Router()
const db = require('../DB')

router.get('/musics', (req,res) => {
    db.getAllMusics()
    .then(result => {
        res.status(200).json(result)
    })
    .catch(err => {
        res.status(500).json(err)
    })
})


router.get('/musics/:id', (req,res) => {
    db.getMusicByID(req.params.id)
    .then(result => {
        res.status(200).json(result[0])
    })
    .catch(err => {
        res.status(500).json(err)
    })
})

router.post('/artists/signup', (req,res) => {
    db.addArtist(req.body)
    .then(result => {
        res.sendStatus(200)
    })
    .catch(err => {
        res.status(500).json(err)
    })
})




module.exports = router;