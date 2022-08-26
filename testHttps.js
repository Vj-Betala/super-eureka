const https = require("https");
const http = require("http");
const fs = require('fs');

// const options = {
//     hostname : 'www.ncei.noaa.gov   ',
//     path : '/cdo-web/api/v2/',
//     method : 'GET',
//     "User-Agent" : "vj.betala@gmail.com"
// };

// const req = https.request(options, res => {
//     console.log(res.statusCode);
//     if(res.statusCode === 403){
//         return;
//     }

//     res.on('data', data=>{
//         console.log(data)
//     });
// });

// req.on('error', err =>{
//     console.error(err);
// });

// req.end();

var s;

https.get('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY', (resp) => {
    var data = '';

    resp.on('data', (chunk) => {
        data += chunk;
    });

    resp.on('end', () => {
        s = JSON.parse(data);
    });
}).on('error', (err) => {
    console.log(err);
});

// http.createServer(function (req, res) {
//     res.writeHead(200, {'Content-Type' : 'image/jpeg'});
//     res.end(s.url);
// }).listen(8124);

// console.log("http://localhost:8124/");

var data = JSON.stringify(s);
fs.writeFileSync('image-data.json', data);

// fs.writeFile('student.json', data, (err) => {
//     if(err) console.error(err);

//     console.log("written");
// })