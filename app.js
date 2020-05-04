const lugar = require('./lugar/lugar');
const clima = require('./clima/clima');
const climaSemana = require('./clima/clima-semana');

const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        desc: 'Dirección de la ciudad para obtener el clima',
        demand: true
    }
}).argv;


// lugar.getLugarLatLng(argv.direccion)
//     .then(console.log)
//     .catch(console.log);

// clima.getClima(dir.lat, dir.lng)
//     .then(console.log)
//     .catch(console.log)


const getInfo = async(direccion) => {

    try {
        const coords = await lugar.getLugarLatLng(direccion);
        const temp = await clima.getClima(coords.lat, coords.lng);
        const tempSemana = await climaSemana.getClimaSemana(coords.lat, coords.lng);

        // return `El clima de ${coords.direccion} es de ${temp} ºC`;
        return tempSemana;

    } catch (error) {
        return `No se pudo determinar el cliema de ${direccion}`;

    }

}

getInfo(argv.direccion)
    .then(console.log)
    .catch(console.log);