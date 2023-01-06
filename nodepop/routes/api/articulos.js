'use strict'

const express = require('express');
const Anuncio = require('../../models/Anuncio');
const router = express.Router();
const Articulo = require('../../models/Anuncio');

// Get ./api/anuncios
router.get('/', async(req, res, next) => {
    try {
        const anuncios = await Anuncio.find();
        res.json({results: anuncios});
    } catch (err) {
        next(err);
    }
});

//Get ./api/agentes/(id)
router.get('/:id', async(req, res, next) => {
    try {
        const id = req.params.id;
        const articulo = await Anuncio.findById(id);

        res.json({result: articulo});
    } catch (error) {
        next(err);
    }
})

//Actualizar anuncio. PUT /api/agentes/(id)(body)
router.put('/:id', async(req, res, next) => {
    try {
        const id = req.params.id;
        const adData = req.body;
        const adUpdate = await Anuncio.findOneAndUpdate({_id: id}, adData, {
            new: true
        });

        res.json({ result: adUpdate });

    } catch (err) {
        next(err);
    }
})




module.exports = router;