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




module.exports = router;