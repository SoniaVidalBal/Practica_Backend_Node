'use strict';

const mongoose = require("mongoose");

const anuncioSchema = mongoose.Schema({
    nombre: String,
    venta: Boolean,
    precio: Number,
    foto: String,
    tags: [String]
});

anuncioSchema.statics.lista = function(filtro) {
    const query = Anuncio.find(filtro);
    return query.exec()
}

const Anuncio = mongoose.model('Anuncio', anuncioSchema);

module.exports = Anuncio;

