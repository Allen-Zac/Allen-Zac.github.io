let weatherRequest = new XMLHttpRequest();
let apiURL = "https://byui-cit230.github.io/weather/data/towndata.json";
weatherRequest.open('GET', apiURL, true);
weatherRequest.send();

weatherRequest.onload = function () {
    let weatherData = JSON.parse(weatherRequest.responseText);
    
    document.getElementById("franklin-name").innerHTML = weatherData.towns[0].name;
    
    document.getElementById("franklin-motto").innerHTML = weatherData.towns[0].motto;
    
    document.getElementById("franklin-year").innerHTML = weatherData.towns[0].yearFounded;
    
    document.getElementById("franklin-pop").innerHTML = weatherData.towns[0].currentPopulation;
    
    document.getElementById("franklin-rain").innerHTML = weatherData.towns[0].averageRainfall;
    
    document.getElementById("greensville-name").innerHTML = weatherData.towns[1].name;
    
    document.getElementById("greensville-motto").innerHTML = weatherData.towns[1].motto;
    
    document.getElementById("greensville-year").innerHTML = weatherData.towns[1].yearFounded;
    
    document.getElementById("greensville-pop").innerHTML = weatherData.towns[1].currentPopulation;
    
    document.getElementById("greensville-rain").innerHTML = weatherData.towns[1].averageRainfall;
    
    document.getElementById("springfield-name").innerHTML = weatherData.towns[3].name;
    
    document.getElementById("springfield-motto").innerHTML = weatherData.towns[3].motto;
    
    document.getElementById("springfield-year").innerHTML = weatherData.towns[3].yearFounded;
    
    document.getElementById("springfield-pop").innerHTML = weatherData.towns[3].currentPopulation;
    
    document.getElementById("springfield-rain").innerHTML = weatherData.towns[3].averageRainfall;
}