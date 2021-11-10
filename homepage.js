let myKey = "0ccf340b422471af8577994f5f5e8925";
let SearchBtnEl = document.getElementById("searchBtn");



let getWeather = function(response) {
    
    // format the weather api url
    let weatherApiUrl = "https://api.openweathermap.org/data/2.5/weather?q=Chicago&appid=0ccf340b422471af8577994f5f5e8925";
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


