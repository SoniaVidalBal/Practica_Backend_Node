'use strict'

const express = require('express');
const createError = require('http-errors');
const Anuncio = require('../../models/Anuncio');
const router = express.Router();

//Filtros, paginación y ordenación de productos
router.get('/', async(req, res, next) => {
    try {
        const nombre = req.query.nombre;
        const precio = req.query.precio;
        const venta = req.query.venta;
        const tags = req.query.tags;
        const filtro = {};

        const skip = req.query.skip;
        const limit = req.query.limit;

        const fields = req.query.fields;

        const sort = req.query.sort;

        if (nombre) {
            filtro.nombre = new RegExp('^' + nombre, "i");
        }

        if (precio) {
            let range = precio.split('-');
            if(range.length === 1) {
                filtro.precio = precio;
            } if (range.length === 2) {
                if (!range[0]) {
                    filtro.precio = {$lte: (range[1])};
                } if (!range[1]) {
                    filtro.precio = {$gte: (range[0])};
                } else {
                    filtro.precio = {$gte: (range[0]), $lte: (range[1])};
                }
            }
        }
        if (venta === "true") {
            filtro.venta = venta;
        } if (venta === "false") {
            filtro.venta = venta;
        }

        if(tags){
            filtro.tags = tags;
        }

        const anuncios = await Anuncio.lista(filtro, skip, limit, fields, sort);
        res.json({results: anuncios});
    } catch (err) {
        next(err);
    }
});

//Listado de tags
router.get('/tags', async(req, res, next) => {
    try {
        const tags = await Anuncio.listaTags();
        const tagsList = [];
        tags.forEach(taglist => {
            taglist.tags.forEach(tag => {
            if(tagsList.indexOf(tag) === -1){
                tagsList.push(tag);
            }})
        })
        res.json({ Tags: tagsList });
    } catch (err) {
        next(err);
    }
});

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

module.exports = router;