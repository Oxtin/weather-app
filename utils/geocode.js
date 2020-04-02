const request = require('request');

const geocode = (address, callback) => {
    var url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + encodeURIComponent(address) + '.json?access_token=pk.eyJ1IjoiYjA3NjExMDQyIiwiYSI6ImNrMGowbDNtbzAybmMzZW8zdHI4bGhxeHYifQ.HU0eGCjq8RiGL7RCF06j2w';

    request({url, json: true}, (error, {body}) => {
        if (error) {
            callback('Cannot connect to the geocode service!', undefined);
        } else if (body.features.length === 0) {
            callback('Cannot find the location!', undefined);
        } else {
            callback(undefined, { 
                latitude: body.features[0].center[1],
                longitude: body.features[0].center[0],
                location: body.features[0].place_name
            });
        }
    });
}

module.exports = geocode;
