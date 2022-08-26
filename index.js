// Learning to make API Calls with Axios, will port into Https. Following Node.dev module on this topic, at https://nodejs.dev/en/learn/making-http-requests-with-nodejs
//Import module
const axios = require("axios");

//call Axios
axios //connect to API
    .get('https://api.weather.gov/points/38.8894,-77.0352')
    .then(res => {
        console.log(`statusCode: ${res.status}`);
        console.log(res);
    }).catch(err => {
        console.error(err)
    });

// Axios bypasses the requirement to use authentication. Figure out how to authenticate user, as https requests need authentication
// Authentication data can be found at https://weather-gov.github.io/api/general-faqs under authentication.

