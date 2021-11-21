let myKey = "0ccf340b422471af8577994f5f5e8925";
let SearchBtnEl = document.getElementById("searchBtn");
let currentWeatherEl = document.getElementById("current-weather");
let searchCityEl = document.getElementById("city");
let cityDisplayEl = document.getElementById("cityDisplay");



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
          currentWeatherEl.appendChild(currentCityItem);

          let currentTempItem = document.createElement('li');
          currentTempItem.textContent = "Current Temp: " + weather.main.temp + " °F";
          currentTempItem.style.listStyle = "none";
          currentWeatherEl.appendChild(currentTempItem);
        
          let currentWindItem = document.createElement('li');
          currentWindItem.textContent = "Wind Speed: " + weather.wind.speed + " MPH";
          currentWindItem.style.listStyle = "none";
          currentWeatherEl.appendChild(currentWindItem);
        
          let currentHumidItem = document.createElement('li');
          currentHumidItem.textContent = "Humidity: " + weather.main.humidity + " %";
          currentHumidItem.style.listStyle = "none";
          currentWeatherEl.appendChild(currentHumidItem);
        
          let lonEL = weather.coord.lon
          let latEl = weather.coord.lat 
          let weatherApiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latEl}&lon=${lonEL}&appid=${myKey}`;
          // make a get request to onecall api  
        fetch(weatherApiUrl)
          .then(function(response) {
        // request was successful
        if (response.ok) {
          response.json().then(function(weather) {
          console.log(weather)
          console.log(weather.current.temp)
          
          let today = new Date().toISOString().slice(0, 10)
          console.log(today)

          let currentDayItem = document.createElement('h3');
          currentDayItem.textContent = "Date: " + today;
          currentWeatherEl.appendChild(currentDayItem);

          let currentUvItem = document.createElement('h3');
          currentUvItem.textContent = "UV: " + weather.current.uvi;
          if (weather.current.uvi <= 2) {
            currentUvItem.style.backgroundColor = "green";
          } 
          if (weather.current.uvi > 2 && weather.current.uvi < 7) {
            currentUvItem.style.backgroundColor = "orange";
          }
          if (weather.current.uvi > 7 && weather.current.uvi <= 12){
            currentUvItem.style.backgroundColor = "red";
          }
          currentWeatherEl.appendChild(currentUvItem);

          
          
      
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
          
              




// 

          

          