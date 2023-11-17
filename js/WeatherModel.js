class WeatherModelOpenWeather extends WeatherDataProvider{

    getWeatherData = async (city) => {

        const apiWeatherURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${this.apiKey}&lang=pt_br`
    
        const res = await fetch(apiWeatherURL);
        const data = await res.json();
    
        return (data);
    }
    
}