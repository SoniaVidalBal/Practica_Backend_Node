'use strict';

const mongoose = require("mongoose");

const anuncioSchema = mongoose.Schema({
    nombre: {type : String, index: true},
    venta: {type : Boolean, index: true},
    precio: {type : Number, index: true},
    foto: {type : String, index: true},
    tags: {type : [String], index: true}
});

anuncioSchema.statics.lista = function(filtro, skip, limit, fields, sort) {
    const query = Anuncio.find(filtro);
    query.skip(skip);
    query.limit(limit);
    query.select(fields);
    query.sort(sort);
    return query.exec()
}

const Anuncio = mongoose.model('Anuncio', anuncioSchema);

module.exports = Anuncio;

