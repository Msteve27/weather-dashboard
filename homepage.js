let myKey = "0ccf340b422471af8577994f5f5e8925";
let SearchBtnEl = document.getElementById("searchBtn");
let currentWeatherEl = document.getElementById("current-weather");



let getWeather = function(response) {
    
    // format the weather api url
    let weatherApiUrl = "https://api.openweathermap.org/data/2.5/weather?q=Chicago&units=imperial&appid=0ccf340b422471af8577994f5f5e8925";
    event.preventDefault();
    // make a get request to url
    fetch(weatherApiUrl)
      .then(function(response) {
        // request was successful
        if (response.ok) {
          response.json().then(function(weather) {
          console.log(weather);
          console.log(weather.main.temp_max);
          console.log(weather.main.temp_min);

          let currentCityItem = document.createElement('h1');
          currentCityItem.textContent = weather.name;
          currentWeatherEl.appendChild(currentCityItem);

          let currentTempItem = document.createElement('li');
          currentTempItem.textContent = weather.main.temp + " °F";
          currentTempItem.style.listStyle = "none";
          currentWeatherEl.appendChild(currentTempItem);

          let currentWindItem = document.createElement('li');
          currentWindItem.textContent = weather.wind.speed + " MPH";
          currentWindItem.style.listStyle = "none";
          currentWeatherEl.appendChild(currentWindItem);

          let currentHumidItem = document.createElement('li');
          currentHumidItem.textContent = weather.main.humidity + " %";
          currentHumidItem.style.listStyle = "none";
          currentWeatherEl.appendChild(currentHumidItem);




          });
        } else {
          alert("Error: " + response.statusText);
        }
      }) 
      .catch(function(error) {
        alert("Unable to connect to OpenWeather");
      });
  };

// add event listener to search button 
SearchBtnEl.addEventListener("click", getWeather);

// let displayWeather = function(weather) {
  
// }