const axios = require('axios');

const getClimaSemana = async(lat, lng) => {

    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lng}&appid=31e1d67111aa406c2dad757a8dcac7d3&units=metric`);

    return resp.data.list;

}


module.exports = {
    getClimaSemana
}