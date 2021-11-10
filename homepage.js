let myKey = "0ccf340b422471af8577994f5f5e8925";
let SearchBtn = document.getElementById("searchBtn");



// let getWeather = function(response) {
//     // format the weather api url
//     let weatherApiUrl = ("https://api.openweathermap.org/data/2.5/weather?q=Chicago&appid=0ccf340b422471af8577994f5f5e8925");
  
//     // make a get request to url
//     fetch(weatherApiUrl)
//       .then(function(response) {
//         // request was successful
//         if (response.ok) {
//           response.json().then(function(weather) {
//           console.log(weather);
//           displayWeather(weather);
//           });
//         } else {
//           alert("Error: " + response.statusText);
//         }
//       }) 
//       .catch(function(error) {
//         alert("Unable to connect to OpenWeather");
//       });
//   };

// getWeather();
// console.log("weather function ran")

// let displayWeather = function(weather) {
//   console.log("displayWeather ran")
//   // Loop through the response
//   for (var i = 0; i < weather.length; i++) {
//     console.log("Max Temp: " + weather[i].main.temp_max);
//   }

// };



fetch("https://api.openweathermap.org/data/2.5/weather?q=Chicago&appid=0ccf340b422471af8577994f5f5e8925")
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log(data);
    // TODO: Loop through the response
    for (var i = 0; i < data.length; i++) {
    console.log("Max Temp:");
    }
    // TODO: Console log each issue's URL and each user's login
  });



// add event listener to search button 
// userFormEl.addEventListener("submit", formSubmitHandler);


