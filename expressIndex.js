const Express = require("express");
const request = require("request");

var app = new Express();
app.set("view engine", 'pug')


app.get('/', function(req, res) {
    res.render("index", {weather: null, error: null});
    console.log("temp");
})

app.post('/', function(req, res){

    let url = "https://api.openweathermap.org/data/2.5/weather?lat=35&lon=139&appid=dcbc8f078596b42faeafa2ef33f99698";
    
    console.log(url);

    request(url, function(err, response, body){
        console.log("hh");
        if(err){
            console.error(err);
        } else {
            let place = `${weather.name}, ${weather.sys.country}`,
            /* you shall calculate the current timezone using the data fetched*/
            weatherTimezone = `${new Date(
              weather.dt * 1000 - weather.timezone * 1000
            )}`;
          let weatherTemp = `${weather.main.temp}`,
            weatherPressure = `${weather.main.pressure}`,
            /* you will fetch the weather icon and its size using the icon data*/
            weatherIcon = `http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`,
            weatherDescription = `${weather.weather[0].description}`,
            humidity = `${weather.main.humidity}`,
            clouds = `${weather.clouds.all}`,
            visibility = `${weather.visibility}`,
            main = `${weather.weather[0].main}`,
            weatherFahrenheit;
          weatherFahrenheit = (weatherTemp * 9) / 5 + 32;

          // you shall also round off the value of the degrees fahrenheit calculated into two decimal places
          function roundToTwo(num) {
            return +(Math.round(num + "e+2") + "e-2");
          }
          weatherFahrenheit = roundToTwo(weatherFahrenheit);

          res.render("index", {
            weather: weather,
            place: place,
            temp: weatherTemp,
            pressure: weatherPressure,
            icon: weatherIcon,
            description: weatherDescription,
            timezone: weatherTimezone,
            humidity: humidity,
            fahrenheit: weatherFahrenheit,
            clouds: clouds,
            visibility: visibility,
            main: main,
            error: null,
          });
        }
    })

})

app.listen(5000, function(){
    console.log("http://localhost:5000");
})