'use strict'

const dbConenction = require('./lib/connectMongoose');
const Anuncio = require('./models/Anuncio');
const anuncionIniciales = require('./models/anunciosinit.json');

async function main() {
    await initAnuncios();
    dbConenction.close();
}

async function initAnuncios(){
    const deletion = await Anuncio.deleteMany();
    console.log(`Eliminados ${deletion.deletedCount} agentes.`);

    const initial = await Anuncio.insertMany(anuncionIniciales);
    console.log(`Insertados ${initial.length} anuncios.`);
}

main().catch(err => console.log('Se ha producido un error:', err));