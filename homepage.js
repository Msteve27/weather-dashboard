let myKey = "0ccf340b422471af8577994f5f5e8925";
let SearchBtnEl = document.getElementById("searchBtn");
let currentWeatherEl = document.getElementById("current-weather");
let searchCityEl = document.getElementById("city");
let cityDisplayEl = document.getElementById("cityDisplay");
let forecastEl = document.getElementById("forecast");



let getWeather = function(city) {
    // format the weather api url
    let searchCity = searchCityEl.value
    // searches city and grabs lat and lon
    let weatherLatLonUrl = `https://api.openweathermap.org/data/2.5/weather?q=${searchCity}&units=imperial&appid=${myKey}`; 
    event.preventDefault();

    // make a get request to url to grab lat and lon
    fetch(weatherLatLonUrl)
      .then(function(response) {
        // request was successful
        if (response.ok) {
          response.json().then(function(weather) { 
          console.log(weather)

          let currentCityItem = document.createElement('h1');
          currentCityItem.textContent = "City: " + weather.name;
          currentCityItem.style.fontSize = "x-large";
          currentCityItem.classList.add("bg-yellow-400", "ml-3", "text-white", "p-1", "rounded-t", "text-center");
          currentWeatherEl.appendChild(currentCityItem);

          let currentWeatherIcon = document.createElement('h1');
          currentWeatherIcon.textContent = weather.weather[0].icon;
          currentWeatherIcon.classList.add("bg-yellow-400", "ml-3", "text-white", "p-1", "text-center");
          currentWeatherEl.appendChild(currentWeatherIcon);

          let currentTempItem = document.createElement('li');
          currentTempItem.textContent = "Current Temp: " + weather.main.temp + " °F";
          currentTempItem.style.listStyle = "none";
          currentTempItem.classList.add("bg-yellow-400", "ml-3", "text-white", "p-1", "text-center");
          currentWeatherEl.appendChild(currentTempItem);
        
          let currentWindItem = document.createElement('li');
          currentWindItem.textContent = "Wind Speed: " + weather.wind.speed + " MPH";
          currentWindItem.style.listStyle = "none";
          currentWindItem.classList.add("bg-yellow-400", "ml-3", "text-white", "p-1", "text-center");
          currentWeatherEl.appendChild(currentWindItem);
        
          let currentHumidItem = document.createElement('li');
          currentHumidItem.textContent = "Humidity: " + weather.main.humidity + " %";
          currentHumidItem.style.listStyle = "none";
          currentHumidItem.classList.add("bg-yellow-400", "ml-3", "text-white", "p-1", "text-center");
          currentWeatherEl.appendChild(currentHumidItem);
        
          let lonEL = weather.coord.lon
          let latEl = weather.coord.lat 
          let weatherApiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latEl}&lon=${lonEL}&units=imperial&appid=${myKey}`;
          // make a get request to onecall api  
        fetch(weatherApiUrl)
          .then(function(response) {
        // request was successful
        if (response.ok) {
          response.json().then(function(weather) {
          console.log(weather)
          console.log(weather.current.temp)
          
          let today = new Date().toISOString().slice(0, 10)
      

          let currentDayItem = document.createElement('h3');
          currentDayItem.textContent = "Date: " + today;
          currentDayItem.classList.add("bg-yellow-400", "ml-3", "text-white", "p-1", "text-center");
          currentWeatherEl.appendChild(currentDayItem);

          let currentUvItem = document.createElement('h3');
          currentUvItem.textContent = "UV: " + weather.current.uvi;
          if (weather.current.uvi <= 2) {
            currentUvItem.style.backgroundColor = "green";
            currentUvItem.classList.add("rounded-b", "text-white", "ml-3", "text-center");
          } 
          if (weather.current.uvi > 2 && weather.current.uvi < 7) {
            currentUvItem.style.backgroundColor = "orange";
            currentUvItem.classList.add("rounded-b", "text-white", "ml-3", "text-center");
          }
          if (weather.current.uvi > 7 && weather.current.uvi <= 12){
            currentUvItem.style.backgroundColor = "red";
            currentUvItem.classList.add("rounded-b", "text-white", "ml-3", "text-center");
          }
          currentWeatherEl.appendChild(currentUvItem);

          // forecast weather begin
          let forecastDay1Item = document.createElement('h3');
          forecastDay1Item.textContent = "Day-1 High Temp: " + weather.daily[1].temp.day + " °F ";
          forecastEl.appendChild(forecastDay1Item);

          let forecastWind1Item = document.createElement('h3');
          forecastWind1Item.textContent = "Day-1 Wind Speed: " + weather.daily[1].wind_speed + " MPH";
          forecastEl.appendChild(forecastWind1Item);

          let forecastHumidity1Item = document.createElement('h3');
          forecastHumidity1Item.textContent = "Day-1 Humidity: " + weather.daily[1].humidity + " % ";
          forecastEl.appendChild(forecastHumidity1Item);

          let forecastDay2Item = document.createElement('h3');
          forecastDay2Item.textContent = "Day-2 High Temp: " + weather.daily[2].temp.day + " °F";
          forecastEl.appendChild(forecastDay2Item);

          let forecastWind2Item = document.createElement('h3');
          forecastWind2Item.textContent = "Day-2 Wind Speed: " + weather.daily[2].wind_speed + " MPH";
          forecastEl.appendChild(forecastWind2Item);

          let forecastHumidity2Item = document.createElement('h3');
          forecastHumidity2Item.textContent = "Day-2 Humidity: " + weather.daily[2].humidity + " % ";
          forecastEl.appendChild(forecastHumidity2Item);

          let forecastDay3Item = document.createElement('h3');
          forecastDay3Item.textContent = "Day-3 High Temp: " + weather.daily[3].temp.day + " °F";
          forecastEl.appendChild(forecastDay3Item);

          let forecastWind3Item = document.createElement('h3');
          forecastWind3Item.textContent = "Day-3 Wind Speed: " + weather.daily[3].wind_speed + " MPH";
          forecastEl.appendChild(forecastWind3Item);

          let forecastHumidity3Item = document.createElement('h3');
          forecastHumidity3Item.textContent = "Day-3 Humidity: " + weather.daily[3].humidity + " % ";
          forecastEl.appendChild(forecastHumidity3Item);

          let forecastDay4Item = document.createElement('h3');
          forecastDay4Item.textContent = "Day-4 High Temp: " + weather.daily[4].temp.day + " °F";
          forecastEl.appendChild(forecastDay4Item);

          let forecastWind4Item = document.createElement('h3');
          forecastWind4Item.textContent = "Day-4 Wind Speed: " + weather.daily[4].wind_speed + " MPH";
          forecastEl.appendChild(forecastWind4Item);

          let forecastHumidity4Item = document.createElement('h3');
          forecastHumidity4Item.textContent = "Day-4 Humidity: " + weather.daily[4].humidity + " % ";
          forecastEl.appendChild(forecastHumidity4Item);

          let forecastDay5Item = document.createElement('h3');
          forecastDay5Item.textContent = "Day-5 High Temp: " + weather.daily[5].temp.day + " °F";
          forecastEl.appendChild(forecastDay5Item);

          let forecastWind5Item = document.createElement('h3');
          forecastWind5Item.textContent = "Day-5 Wind Speed: " + weather.daily[5].wind_speed + " MPH";
          forecastEl.appendChild(forecastWind5Item);

          let forecastHumidity5Item = document.createElement('h3');
          forecastHumidity5Item.textContent = "Day-5 Humidity: " + weather.daily[5].humidity + " % ";
          forecastEl.appendChild(forecastHumidity5Item);
          });
        } else {
          alert("Error: " + response.statusText);
        }
      }) 
      .catch(function(error) {
        alert("Unable to connect to OpenWeather");
      });  
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