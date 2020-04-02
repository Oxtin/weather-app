const request = require('request');

const forecast = (latitude, longitude, callback) => {
    var url = `https://api.darksky.net/forecast/e7228dbf17e756270dd222554288421c/${latitude},${longitude}?units=auto&lang=zh-tw`;

    request({url: url, json: true}, (error, {body}) => {
        if (error) {
            callback('Cannot connect to the weather service!', undefined);
        } else if (body.error) {
            callback('Unable to find the location!');
        } else {
            callback(undefined, `${body.daily.data[0].summary}It is currently ${body.currently.temperature} degrees out. There is a ${body.currently.precipProbability}% chance of rain.`);
        }
    });
}

module.exports = forecast;
