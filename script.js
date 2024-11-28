const apiKey = "ab991ec11f242548d793e5dd3a4adbf4"; // Replace with your OpenWeatherMap API key
const searchBtn = document.getElementById("searchBtn");
const cityInput = document.getElementById("cityInput");
const weatherInfo = document.getElementById("weatherInfo");
const city = cityInput.value.trim();

searchBtn.addEventListener("click", () => {
  const city = cityInput.value;
  if (city) {
    fetchWeather(city);
  } else {
    alert("Please enter a city name");
  }
});

function fetchWeather(city) {
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    console.log("API URL:", apiUrl); // Log the URL to ensure it is correct
  
    fetch(apiUrl)
      .then(response => {
        console.log("Response Status:", response.status); // Log status
        if (!response.ok) {
          throw new Error(`Error: ${response.status} - ${response.statusText}`);
        }
        return response.json();
      })
      .then(data => {
        console.log("Weather Data:", data); // Log the actual data
        displayWeather(data);
      })
      .catch(error => {
        console.error("Error:", error);
        alert(error.message);
      });
  }
  
  

function displayWeather(data) {
  weatherInfo.classList.remove("hidden");
  document.getElementById("cityName").innerText = `City: ${data.name}`;
  document.getElementById("temperature").innerText = `Temperature: ${data.main.temp}°C`;
  document.getElementById("description").innerText = `Weather: ${data.weather[0].description}`;
  document.getElementById("humidity").innerText = `Humidity: ${data.main.humidity}%`;
  document.getElementById("windSpeed").innerText = `Wind Speed: ${data.wind.speed} m/s`;
}
