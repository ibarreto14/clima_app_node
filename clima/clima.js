const axios = require('axios');

const getClima = async(lat, lng) =>{
	let resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&units=metric&appid=b3bf0dbea893234c7abadd886c2d3cf0`)
	
	return resp.data.main.temp;
}


module.exports = {
	getClima
}