let myKey = "0ccf340b422471af8577994f5f5e8925";

// fetch("https://api.openweathermap.org/data/2.5/weather?q=Chicago&appid=${myKey}")
// .then(function (response) {
//   return response.json();
// })


// let getWeather = function(response) {
//   // format the weather api url
//   let weatherApiUrl = "https://api.openweathermap.org/data/2.5/weather?q=Chicago&appid=0ccf340b422471af8577994f5f5e8925";

//   // make a get request to url
//   fetch(weatherApiUrl)
//     .then(function(response) {
//       return response.json();
//     })
//     .then(function(data)  {
//       console.log(data);
//       console.log(data.main.temp_max);
//       console.log(data.main.temp_min);
//       // Loop through the response
//       for (var i = 0; i < data.length; i++) {
//       console.log("Max Temp: " + data[i].main.temp_max);
//       }
//     });  
      
// }

// let displayWeather = function(weather) {
//   console.log("displayWeather ran")
//   // Loop through the response
//   for (var i = 0; i < weather.length; i++) {
//     console.log("Max Temp: " + weather[i].main.temp_max);
//   }

// };


class Fetch {
    async getCurrent(input) {
        let response = await fetch(
            'https://api.openweathermap.org/data/2.5/weather?q=${input}&appid=${myKey}'
        );

        let data = await response.json();
        return data;
    }
}


// grab the user input
const input = document.querySelector(‘input’)
const searchBtn = document.getElementById(‘searchBtn’)
const cryptoNameEl = document.getElementById(‘name’)
const cryptoPriceEl = document.getElementById(‘price’)
const cryptoRankEl = document.getElementById(‘rank’)
const cryptoHighEl = document.getElementById(‘high’)
const asideEl = document.querySelector(‘aside’)
const searchesDiv = document.getElementById(‘searches’)
let searches = localStorage.getItem(‘mySearches’)
						? JSON.parse(localStorage.getItem(‘mySearches’))
						: localStorage.setItem(‘mySearches’, JSON.stringify([]))
// if (searches) {
// 	searches = JSON.parse(localStorage.getItem(‘mySearches’))
// } else {
// 	localStorage.setItem(‘mySearches’, JSON.stringify([]))
// }
function populateCrypto(cryptos) {
	let divArray = [...searchesDiv.children]
	if (searchesDiv.hasChildNodes()) {
		divArray.forEach(element => {
			element.remove()
		});
	}
	if (cryptos.length > 0) {
		cryptos.forEach(crypto => {
			let aEl = document.createElement(‘a’)
			aEl.setAttribute(“class”, “block mt-2 bg-gray-300 text-center rounded p-1 search”)
			aEl.innerText = crypto
			searchesDiv.appendChild(aEl)
		})
	}
}
populateCrypto(searches)
function handleSearch() {
	// let cryptoId = input.value.toUpperCase()
	let cryptoId = input.value.toUpperCase()
	let url = `https://api.nomics.com/v1/currencies/ticker?key=1c9290f94cc5bd355453afe72dc1fa4d89225b52&ids=${cryptoId}&interval=1d,7d,30d,365d,ytd&convert=USD&per-page=100&page=1`
	
	if (cryptoId) {
		// make a fetch call => function
		getCryptoData(url)
	}
	
	input.value = “”
}
function getCryptoData(url) {
	fetch(url)
	.then(response => response.json())
	.then(data => {
		console.log(‘data: ’, data);
		let crypto = data[0]
		populateData(crypto)
		let searches = JSON.parse(localStorage.getItem(‘mySearches’))
		searches.push(crypto.id)
		let uniqueSearches =Array.from(new Set(searches))
		console.log(‘uniqueSearches: ’, uniqueSearches);
		localStorage.setItem(‘mySearches’, JSON.stringify(uniqueSearches))
		// let aEl = document.createElement(‘a’)
		// aEl.setAttribute(“class”, “block mt-2 bg-gray-300 text-center rounded p-1”)
		// aEl.innerText = crypto.id
		// asideEl.appendChild(aEl)
		populateCrypto(uniqueSearches)
	})
	.catch(err => {
		if (err) alert(‘bad input’)
	})
}
function populateData(crypto) {
	// populate the main section with the data
	cryptoNameEl.textContent = `Name: ${crypto.name}`
	cryptoPriceEl.textContent = `Price: $${crypto.price}`
	cryptoRankEl.textContent = `Rank: ${crypto.rank}`
	cryptoHighEl.textContent = `High: ${crypto.high}`
	
	let cryptoLogoEl = document.getElementById(‘logo’)
	cryptoLogoEl.setAttribute(‘src’, crypto.logo_url)
	cryptoLogoEl.setAttribute(‘alt’, crypto.name + ‘logo’)
	cryptoLogoEl.removeAttribute(‘hidden’)
}
function refetchCrypto(event) {
	if (event.target.classList.value.includes(“search”)) {
		let crypto = event.target.innerText
	
		let url = `https://api.nomics.com/v1/currencies/ticker?key=1c9290f94cc5bd355453afe72dc1fa4d89225b52&ids=${crypto}&interval=1d,7d,30d,365d,ytd&convert=USD&per-page=100&page=1`
	
		getCryptoData(url)
	}
}
asideEl.addEventListener(‘click’, refetchCrypto)
searchBtn.addEventListener(‘click’, handleSearch)