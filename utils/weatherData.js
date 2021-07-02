const request = require('request');

const weatherData = (address, callback) => {
    const url = 'https://api.openweathermap.org/data/2.5/weather?q=' + encodeURIComponent(address) + '&appid=c856dcfb8e6fa5ba7a5d63666c46e46e&units=metric'
    request({url, json:true}, (error, {body})=> {
        if(error) {
            callback("Can't fetch data from open weather map api ", undefined)
        } else if(!body.main || !body.main.temp || !body.name || !body.weather) {
            callback("Unable to find required data, try another location", undefined);
        } else {
            callback(undefined, {
                temperature: body.main.temp,
                description: body.weather[0].description,
                cityName: body.name
            })
        }
    })
}

module.exports = weatherData;