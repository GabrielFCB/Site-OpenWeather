class WeatherView {
    constructor() {
        this.apiCountryURL1 = "https://flagsapi.com/";
        this.apiCountryURL2 = "/shiny/64.png";
        this.cityElement = document.querySelector("#city");
        this.tempElement = document.querySelector("#temperature span");
        this.descElement = document.querySelector("#description");
        this.weatherIconElement = document.querySelector("#weather-icon");
        this.countryElement = document.querySelector("#country");
        this.humidityElement = document.querySelector("#humidity span");
        this.windElement = document.querySelector("#wind span");
        this.weatherContainer = document.querySelector("#weather-data");
    }

    showWeatherData = async (city) => {
        const weatherModel= new WeatherModel();
        const data = await weatherModel.getWeatherData(city);
        this.cityElement.innerText = data.name;
        this.tempElement.innerText = parseInt(data.main.temp);
        this.descElement.innerText = data.weather[0].description;
        this.weatherIconElement.setAttribute("src", `http://openweathermap.org/img/wn/${data.weather[0].icon}.png`);
        const flagIconURL = this.apiCountryURL1 + data.sys.country + this.apiCountryURL2;
        this.countryElement.setAttribute("src", flagIconURL);
        this.humidityElement.innerText = data.main.humidity + "%";
        this.windElement.innerText = data.wind.speed + "km/h";
    
        this.weatherContainer.classList.remove("hide");
    
    }


}