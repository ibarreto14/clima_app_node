const argv = require('./config/yargs').argv;
const lugar = require('./lugar/lugar');
const clima = require('./clima/clima');


const getInfo = async(direccion) => {
	try{
		let coors = await lugar.getLugarLatLng(direccion);
		let temp  = await clima.getClima(coors.lat,coors.lng);

		return `La temperatura en ${coors.direccion} es de ${ temp }°C`;
	}
	catch( e ){
		return `No se pudo determinar la temperatura en ${ direccion }`;
	}

	
}

getInfo(argv.direccion)
	.then( result => console.log(result))
	.catch(e => console.log(e))