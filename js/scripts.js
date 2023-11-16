//Variáveis e seleção de elementos
const apiKey="f8a52d7883969f5dcbe05d54d94ddc55";
const apiCountryURL1 ="https://flagsapi.com/";
const apiCountryURL2 ="/shiny/64.png";

const cityInput = document.querySelector("#city-input");
const searchBtn = document.querySelector("#search");

const cityElement = document.querySelector("#city");
const tempElement = document.querySelector("#temperature span");
const descElement = document.querySelector("#description");
const weatherIconElement = document.querySelector("#weather-icon");
const countryElement = document.querySelector("#country");
const humidityElement = document.querySelector("#humidity span");
const windElement = document.querySelector("#wind span");

// Funções
const getWeatherData = async (city) => {

    const apiWeatherURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}&lang=pt_br`

    const res = await fetch (apiWeatherURL);
    const data= await res.json();

    return(data);
}



const showWeatherData = async (city)=> {
    const data = await getWeatherData(city);
    cityElement.innerText= data.name;
    tempElement.innerText= parseInt(data.main.temp);
    descElement.innerText= data.weather[0].description;
    weatherIconElement.setAttribute("src",`http://openweathermap.org/img/wn/${data.weather[0].icon}.png`);
    const flagIconURL= apiCountryURL1+data.sys.country+apiCountryURL2;
    countryElement.setAttribute("src",flagIconURL);
    humidityElement.innerText= data.main.humidity+"%";
    windElement.innerText= data.wind.speed+"km/h"; 


    console.log(data)
    
}

//Eventos
searchBtn.addEventListener("click", (e)=>{
    e.preventDefault()

    const city= cityInput.value;

    showWeatherData(city);

})