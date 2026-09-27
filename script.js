// console.log("workingg...");
async function getWeatherForCity(cityName) {
    //1. cityname => coordinates 
    const geoRes = await fetch(
        `https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(cityName)}&count=1`
    );
    const geoData = await geoRes.json();
    // The geocoding API returns a results array. If it's missing or empty, the city name didn't match anything, so we stop here and throw an error instead of continuing with broken data.
    if (!geoData.results || geoData.results.length === 0) {
        return new Error(`City "${cityName}" not found`);
    }
    const { latitude, longitude, name, country } = geoData.results[0];
    /* geoData = {
     results: [
       {
         latitude: 52.52,
         longitude: 13.4,
         name: "Berlin",
         country: "Germany",
         country_code: "DE",
         population: 3426354,
         // ...more fields
       },
       {  second match, if any  },
        ...
     ]
   } 
   */


    /* What destructuring does
 
     Without destructuring, you'd have to write:
     const place = geoData.results[0];
     const latitude = place.latitude;
     const longitude = place.longitude;
     const name = place.name;
     const country = place.country;
 
     Destructuring lets you skip the repetition and do it in one line:
     const { latitude, longitude, name, country } = geoData.results[0]; */

    // 2. Fetch weather using those cordinates
    const weatherRes = await fetch(
        `https://api.open-meteo.com/v1/forecast` +
    `?latitude=${latitude}&longitude=${longitude}` +
    `&current=temperature_2m,apparent_temperature,relative_humidity_2m,wind_speed_10m,visibility` +
    `&daily=temperature_2m_max,temperature_2m_min,apparent_temperature_max,apparent_temperature_min,wind_speed_10m_max,relative_humidity_2m_max` +
    `&timezone=auto`
    );
    const weatherData = await weatherRes.json();
    // console.log(weatherData);
    
    const current = {
    temperature: weatherData.current.temperature_2m,
    feelsLike: weatherData.current.apparent_temperature,
    humidity: weatherData.current.relative_humidity_2m,
    windSpeed: weatherData.current.wind_speed_10m,
    visibility: weatherData.current.visibility,
    time: weatherData.current.time,
  };

  //  Build a clean array of daily forecasts
  const daily = weatherData.daily.time.map((date, i) => ({
    date,
    tempMax: weatherData.daily.temperature_2m_max[i],
    tempMin: weatherData.daily.temperature_2m_min[i],
    feelsLikeMax: weatherData.daily.apparent_temperature_max[i],
    feelsLikeMin: weatherData.daily.apparent_temperature_min[i],
    windSpeedMax: weatherData.daily.wind_speed_10m_max[i],
    humidityMax: weatherData.daily.relative_humidity_2m_max[i],
  }));

  return {
    city: name,
    country,
    current,
    daily,
  };
}

//create card.......


let container = document.getElementById("weather-container");

// Main card
let card = document.createElement("section");
card.className = "weather-card";


// Weather location
let weatherLocation = document.createElement("div");
weatherLocation.className = "weather-location";


// Location text
let locationDiv = document.createElement("div");

let city = document.createElement("h2");
city.textContent = "Mumbai";

let country = document.createElement("p");
country.textContent = "India";

locationDiv.appendChild(city);
locationDiv.appendChild(country);


// Weather icon
let weatherIcon = document.createElement("i");
weatherIcon.className = "fa-solid fa-cloud-sun weather-icon";


// Add location + icon
weatherLocation.appendChild(locationDiv);
weatherLocation.appendChild(weatherIcon);


// Temperature
let temperature = document.createElement("div");
temperature.className = "temperature";

let temp = document.createElement("span");
temp.textContent = "28";

let degree = document.createElement("sup");
degree.textContent = "°C";

temperature.appendChild(temp);
temperature.appendChild(degree);


// Weather condition
let condition = document.createElement("h3");
condition.textContent = "Partly Cloudy";


// Feels like
let feels = document.createElement("p");
feels.className = "feels";
feels.textContent = "Feels like 30°C";


// Weather details
let details = document.createElement("div");
details.className = "weather-details";


// Humidity
let humidity = document.createElement("div");

let humidityIcon = document.createElement("i");
humidityIcon.className = "fa-solid fa-droplet";

let humidityText = document.createElement("span");
humidityText.textContent = "Humidity";

let humidityValue = document.createElement("strong");
humidityValue.textContent = "72%";

humidity.appendChild(humidityIcon);
humidity.appendChild(humidityText);
humidity.appendChild(humidityValue);


// Wind
let wind = document.createElement("div");

let windIcon = document.createElement("i");
windIcon.className = "fa-solid fa-wind";

let windText = document.createElement("span");
windText.textContent = "Wind";

let windValue = document.createElement("strong");
windValue.textContent = "14 km/h";

wind.appendChild(windIcon);
wind.appendChild(windText);
wind.appendChild(windValue);


// Visibility
let visibility = document.createElement("div");

let visibilityIcon = document.createElement("i");
visibilityIcon.className = "fa-solid fa-eye";

let visibilityText = document.createElement("span");
visibilityText.textContent = "Visibility";

let visibilityValue = document.createElement("strong");
visibilityValue.textContent = "8 km";

visibility.appendChild(visibilityIcon);
visibility.appendChild(visibilityText);
visibility.appendChild(visibilityValue);


// Add details
details.appendChild(humidity);
details.appendChild(wind);
details.appendChild(visibility);


// Build card
card.appendChild(weatherLocation);
card.appendChild(temperature);
card.appendChild(condition);
card.appendChild(feels);
card.appendChild(details);


// Add card to webpage
container.appendChild(card);