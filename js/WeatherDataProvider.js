class WeatherDataProvider {
    constructor(apiKey){
        this.apiKey=apiKey;
    }

    async getWeatherData (city){} //Metodo abstrato
}