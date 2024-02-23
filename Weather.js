var weatherInfo = document.getElementById('weatherInfo');
var cityElement = document.getElementById('city');
var temperatureElement = document.getElementById('temperature');
var humidityElement = document.getElementById('humidity');
var descriptionElement = document.getElementById('description');




function getWeather() {
    var cityName = document.getElementById('cityName').value;
    var apiKey = 'bff55fb56b7638c11f86892e115aa43b'; // Replace with your API key
    var url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=metric`;
    var method= `GET`
    callapi(url, method)
}
function callapi(url, method){
    var request=new XMLHttpRequest();
    request.open(method, url, true);
    request.onload=callBackAfterResponse;

    request.send();
}
function callBackAfterResponse(){
    var responseData=this.responseText;
    var weatherData=JSON.parse(responseData);

    if (weatherData.name) {
        cityElement.textContent = weatherData.name;
        temperatureElement.textContent = weatherData.main.temp;
        humidityElement.textContent = weatherData.main.humidity;
        descriptionElement.textContent = weatherData.weather[0].description;

        weatherInfo.style.display = 'block';
    } else {
        // responseData.send('Invalid city name or data not available.');
        weatherInfo.style.display = 'block';
    }
}
  

