'use strict'

const dbConenction = require('./lib/connectMongoose');
const Anuncio = require('./models/Anuncio');

async function main() {
    await initAnuncios();
    dbConenction.close();
}

async function initAnuncios(){
    const deletion = await Anuncio.deleteMany();
    console.log(`Eliminados ${deletion.deletedCount} agentes.`);

    const initial = await Anuncio.insertMany([
        {nombre: 'Iphone 7',
        venta: true,
        precio: 120,
        foto: '././images/Iphone7.png',
        tags: ['tech', 'lifestyle', 'electronica']
        },
        {nombre: 'Vaso',
        venta: true,
        precio: 3,
        foto: '././images/Vaso_cristal.jpg',
        tags: ['hogar', 'lifestyle']
        },
        {nombre: 'Guitarra',
        venta: false,
        precio: 100,
        foto: '././images/Guitarra_electrica.jpg',
        tags: ['musica', 'electronica']
        }
    ]);
    console.log(initial);
}

main().catch(err => console.log('Se ha producido un error:', err));