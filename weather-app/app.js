const yargs = require('yargs');
const geocode = require('./geocode/geocode.js')
const weather = require('./weather/weather');

const argv = yargs
    .options({
        a: {
            demand: true,
            alias: 'address',
            describe: 'address to fetch weather for',
            string: true
        }
    })
    .help()
    .alias('help', 'h')
    .argv;

geocode.geocodeAddress(argv.address, (errorMessage, results) => {
    if (errorMessage) {
        console.log(errorMessage);
    }
    else {
        console.log(results.address);
        weather.getWeather(results.latitude, results.longitude, (errorMessage, resultsWeather) => {
            if (errorMessage) {
                console.log(errorMessage);
            }
            else {
                console.log(`it's currently ${resultsWeather.temperate}. it feels like ${resultsWeather.apparentTemperature}`);
            }
        });
    }
});

//lat,lng,callback


//d270ea157270def985987d07f6f03149
//https://api.darksky.net/forecast/d270ea157270def985987d07f6f03149/39.9396284,-75.18663959999999

