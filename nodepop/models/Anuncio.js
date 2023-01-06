'use strict';

const mongoose = require("mongoose");

const anuncioSchema = mongoose.Schema({
    name: String,
    venta: Boolean,
    precio: Number,
    foto: String,
    tags: [String]
});

const Anuncio = mongoose.model('Anuncio', anuncioSchema);

module.exports = Anuncio;

