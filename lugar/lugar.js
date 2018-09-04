const axios = require('axios');

const getLugarLatLng = async(dato) => {
	let encodedUrl = encodeURI(dato);

	let resp = await axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${ encodedUrl }&key=AIzaSyDDfLjgogonhL2c7ERCk1CStEhI3q8O82Q`)

	if(resp.data.status === 'ZERO_RESULTS' ) {
		throw new Error( `No hay resultados para la ciudad ${ dato }`);
	}
		
	let location = resp.data.results[0];
	let coors = resp.data.results[0].geometry.location;

	return {direccion:location.formatted_address, lat:coors.lat, lng:coors.lng};
}



module.exports = {
	getLugarLatLng
}