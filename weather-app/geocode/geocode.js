const request = require('request');

var geocodeAddress = (address, callbacks) => {

    var encodedAddress = encodeURIComponent(address);

    request({
        url: `https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}`,
        json: true
    }, (error, response, body) => {
        if (error) {
            callbacks('unable to connect to google servers');          
        } else if (body.status === 'ZERO_RESULTS') {
            callbacks('unable to find that address');
        }
        else if (body.status === 'OK') {
            callbacks(undefined, {
                address: body.results[0].formatted_address,
                latitude: body.results[0].geometry.location.lat,
                longitude: body.results[0].geometry.location.lng
            });
        }
    });
};

module.exports.geocodeAddress = geocodeAddress;

