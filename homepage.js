let SearchBtn = document.getElementById("searchBtn");



let getWeather = function(weather) {
    // format the weather api url
    var apiUrl = "https://api.github.com/users/" + user + "/repos";
  
    // make a get request to url
    fetch(apiUrl)
      .then(function(response) {
        // request was successful
        if (response.ok) {
          console.log(response);
          response.json().then(function(weather) {
            console.log(weather);
            displayWeather(weather, temperature);
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
userFormEl.addEventListener("submit", formSubmitHandler);