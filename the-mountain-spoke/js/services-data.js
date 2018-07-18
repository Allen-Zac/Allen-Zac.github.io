let dataRequest = new XMLHttpRequest();
let apiURL = "https://allen-zac.github.io/the-mountain-spoke/data/services-data.json";
dataRequest.open('GET', apiURL, true);
dataRequest.send();

dataRequest.onload = function () {
    let weatherData = JSON.parse(dataRequest.responseText);
    
    document.getElementById("service1").innerHTML = weatherData.services[0].service;
    
    document.getElementById("price1").innerHTML = weatherData.services[0].price;
    
    document.getElementById("service2").innerHTML = weatherData.services[1].service;
    
    document.getElementById("price2").innerHTML = weatherData.services[1].price;
    
    document.getElementById("service3").innerHTML = weatherData.services[2].service;
    
    document.getElementById("price3").innerHTML = weatherData.services[2].price;
    
    document.getElementById("service4").innerHTML = weatherData.services[3].service;
    
    document.getElementById("price4").innerHTML = weatherData.services[3].price;
    
    document.getElementById("service5").innerHTML = weatherData.services[4].service;
    
    document.getElementById("price5").innerHTML = weatherData.services[4].price;
    
    document.getElementById("service6").innerHTML = weatherData.services[5].service;
    
    document.getElementById("price6").innerHTML = weatherData.services[5].price;
    
}