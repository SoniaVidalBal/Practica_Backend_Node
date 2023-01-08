
const readline = require('readline');
const Anuncio = require('./models/Anuncio');
const anunciosIniciales = require('./models/anunciosinit.json');

async function main() {
    const sure = await question('Seguro que quieres eliminar la Base de Datos?')
    if(!sure) {
        process.exit();
    }
    const dbConenction = require('./lib/connectMongoose');
    await initAnuncios();
    dbConenction.close();
}

main().catch(err => console.log('Se ha producido un error:', err));

async function initAnuncios(){
    const deletion = await Anuncio.deleteMany();
    console.log(`Eliminados ${deletion.deletedCount} agentes.`);

    const initial = await Anuncio.insertMany(anunciosIniciales);
    console.log(`Insertados ${initial.length} anuncios.`);
}

function question(text) {
    return new Promise((resolve, reject) => {
        const interface = readline.createInterface({
            input: process.stdin,
            output: process.stdout
        });
        interface.question(text, answer => {
            interface.close();
            if (answer.toLowerCase() === 'si') {
                resolve(true);
                return;
            } else {
                resolve(false);
            }
        })
    })
}