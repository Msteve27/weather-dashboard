let myKey = "0ccf340b422471af8577994f5f5e8925";

fetch("https://api.openweathermap.org/data/2.5/weather?q=Chicago&appid=${myKey}")
.then(function (response) {
  return response.json();
})