# 🌤️ Skyly

Skyly is a simple weather app built using **HTML, CSS, and JavaScript**. It uses the **Open-Meteo API** to fetch weather information for a searched city.

## ✨ Features

* 🔍 Search weather by city
* 🌡️ Current temperature
* 🤗 Feels-like temperature
* 💧 Humidity
* 💨 Wind speed
* 👁️ Visibility
* 📅 7-day weather forecast
* 📱 Responsive design
* ⚡ Dynamic weather cards using JavaScript

## 🛠️ Technologies

* HTML
* CSS
* JavaScript
* Open-Meteo API
* Font Awesome

## 🔄 How It Works

```text
City Name
   ↓
Geocoding API
   ↓
Latitude & Longitude
   ↓
Weather API
   ↓
Weather Data
   ↓
Dynamic Weather Card
```

The app first converts the searched city into coordinates using the **Open-Meteo Geocoding API**. These coordinates are then used to fetch the current weather and forecast.

## 📚 JavaScript Concepts Used

* `fetch()`
* `async / await`
* Promises
* API handling
* Destructuring
* Arrays & Objects
* `.map()`
* DOM manipulation
* `createElement()`
* `appendChild()`
* Event listeners
* Spread operator

## 📁 Project Structure

```text
Skyly/
├── index.html
├── style.css
├── script.js
└── README.md
```

## 🚀 Future Improvements

* 📍 Current location detection
* 🌦️ Dynamic weather icons
* 🌙 Dark mode
* ⏳ Loading animation
* 🌡️ Celsius/Fahrenheit toggle
* 💾 Recently searched cities

## 👨‍💻 Author

Built as a JavaScript learning project to practice **APIs, asynchronous JavaScript, and DOM manipulation**.
