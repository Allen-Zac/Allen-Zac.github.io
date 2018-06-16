var high = parseInt(document.getElementById("high").innerHTML);
var low = parseInt(document.getElementById("low").innerHTML);
var windSpeed = parseInt(document.getElementById("speed").innerHTML);

var averageTemp = ((high+low)/2);
var newSpeed = Math.pow(windSpeed, 0.16);
var windChill = 35.74 + 0.6215 * averageTemp - 35.75 * newSpeed + 0.4275 * averageTemp * newSpeed;
    
windChill=Math.round(windChill);

document.getElementById("windChill").innerHTML = windChill;