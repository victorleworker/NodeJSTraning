﻿const request = require('request');
var getWeather = (lat,lng,callback) => {
    request({
        url: 'https://api.darksky.net/forecast/d270ea157270def985987d07f6f03149/' + lat + ',' + lng,
        json: true
    }, (error, response, body) => {
        if (error) {
            callback('Unable to connect to Forcaset.IO server.');
        }
        else if (response.statusCode === 400) {
            callback('Unable to fetch weather.');
        }
        else if (response.statusCode === 200) {
            callback(undefined, {
                temperate: body.currently.temperature,
                apparentTemperature: body.currently.apparentTemperature
            });
        }
    });
};

module.exports.getWeather = getWeather;
// url: `https://api.darksky.net/forecast/d270ea157270def985987d07f6f03149/${lat},${lng}`,