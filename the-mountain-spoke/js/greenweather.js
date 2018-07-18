let weatherRequest = new XMLHttpRequest();
let apiURL = "https://api.openweathermap.org/data/2.5/weather?id=2643743&APPID=8dac075262bd3f12b5011ba752715844&units=imperial";
weatherRequest.open('GET', apiURL, true);
weatherRequest.send();

weatherRequest.onload = function () {
    let weatherData = JSON.parse(weatherRequest.responseText);
    
    document.getElementById("description").innerHTML = weatherData.weather[0].description;
     document.getElementById("currentTemp").innerHTML = weatherData.main.temp;
    document.getElementById("speed").innerHTML = weatherData.wind.speed;
    let imagesrc = "https://openweathermap.org/img/w/" + weatherData.weather[0].icon + ".png"
    document.getElementById("weatherIcon").src = imagesrc;
}