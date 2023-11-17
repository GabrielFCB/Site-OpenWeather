class WeatherControl{
    constructor (){
        this.cityInput = document.querySelector("#city-input");
        this.searchBtn = document.querySelector("#search");

        this.bindEvents();
    }

    bindEvents() {
        this.searchBtn.addEventListener("click", (e) => {
            e.preventDefault()
        
            const city = this.cityInput.value;
        
            this.search(city);
        
        })

        this.cityInput.addEventListener("keyup", (e) => {

            if (e.code === "Enter") {
                const city = e.target.value;
        
                this.search(city);
            }
        })


    }

    search(city){
        const weatherView=new WeatherView();
        weatherView.showWeatherData(city);
    }
}




const weatherControl=new WeatherControl();