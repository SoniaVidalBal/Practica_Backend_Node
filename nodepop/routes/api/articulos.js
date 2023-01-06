'use strict'

const express = require('express');
const createError = require('http-errors');
const Anuncio = require('../../models/Anuncio');
const router = express.Router();


// Get /api/anuncios
router.get('/', async(req, res, next) => {
    try {
        const nombre = req.query.nombre;
        const precio = req.query.precio;
        const venta = req.query.venta;
        const filtro = {};

        if (nombre) {
            filtro.nombre = nombre;
        }

        if (precio) {
            filtro.precio = precio;
        }

        if (venta) {
            filtro.venta = venta;
        }

        const anuncios = await Anuncio.lista(filtro);
        res.json({results: anuncios});
    } catch (err) {
        next(err);
    }
});

//Buscar un anuncio
router.get('/:id', async(req, res, next) => {
    try {
        const id = req.params.id;
        const articulo = await Anuncio.findById(id);

        res.json({result: articulo});
    } catch (err) {
        next(err);
    }
})

//Actualizar anuncio
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

//Crear un anuncio
router.post('/', async(req, res, next) => {
    try {
        const adData = req.body;
        const anuncio = new Anuncio(adData);
        const adSaved = await anuncio.save();

        res.json({ result: adSaved});
    } catch (err) {
        next(err);
    }
})

//Eliminar un anuncio
router.delete('/:id', async(req, res, next) => {
    try {
        const id = req.params.id;
        const anuncio = await Anuncio.findById(id);
        
        if(!anuncio){
            return next(createError(404));
        }
        
        await Anuncio.deleteOne({_id: id});

        res.json();
    } catch (err) {
        next(err);
    }
})



module.exports = router;