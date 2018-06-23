let weatherRequest = new XMLHttpRequest();
let apiURL = "https://api.openweathermap.org/data/2.5/weather?id=4156210&APPID=8dac075262bd3f12b5011ba752715844&units=imperial";
weatherRequest.open('GET', apiURL, true);
weatherRequest.send();

weatherRequest.onload = function () {
    let weatherData = JSON.parse(weatherRequest.responseText);
    
    console.log(weatherData);
    
    document.getElementById("current-temp").innerHTML = weatherData.main.temp;
}