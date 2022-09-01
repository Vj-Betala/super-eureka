import got from "got";

const url = "https://api.openweathermap.org/data/2.5/weather?lat=29.7159881&lon=-95.8296086&appid=dcbc8f078596b42faeafa2ef33f99698";

const data = await got(url).json();


console.log(data);

let cel = data.main.temp - 273.15;
let far = (cel * (9/5))+32;

console.log('Farhenheit, ' + far);