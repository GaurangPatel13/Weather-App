const apiKey = "17674c97be54b0bf720e28fa2c9262cb";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");

async function checkWeather(city) {
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);

    if(response.status == 404) {
        document.querySelector(".error").style.display = "block";
        document.querySelector(".weather").style.display = "none";
    } else {
        var data = await response.json();

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + " °C";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";

    if(data.weather[0].main == "Clouds") {
        document.querySelector(".weather-icon").src = "Assets/clouds.png";
    } else if(data.weather[0].main == "Clear") {
        document.querySelector(".weather-icon").src = "Assets/clear.png";
    } else if(data.weather[0].main == "Rain") {
        document.querySelector(".weather-icon").src = "Assets/rain.png";
    } else if(data.weather[0].main == "Drizzle") {
        document.querySelector(".weather-icon").src = "Assets/drizzle.png";
    } else if(data.weather[0].main == "Mist") {
        document.querySelector(".weather-icon").src = "Assets/mist.png";
    }

    document.querySelector(".weather").style.display = "block";
    document.querySelector(".error").style.display = "none";
    }
    
}

searchBtn.addEventListener("click", () => {
    checkWeather(searchBox.value);
})