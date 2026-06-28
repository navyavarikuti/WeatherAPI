const date = document.getElementById('date')
const city = document.getElementById('city')
const temp = document.getElementById('temp')
const tempImage = document.getElementById('tempImage')
const description = document.getElementById('description')
const tempMax = document.getElementById('tempMax')
const tempMin = document.getElementById('tempMin')

const months = ['January','Febraury','March','April','May','June','July','August',
    'September','October','November','December']
const dateObj = new Date()
let month = months[dateObj.getUTCMonth()]
let day = dateObj.getUTCDate()-1;
let year = dateObj.getFullYear()
date.innerHTML=`${day} ${month},${year}`

const app = document.getElementById('app')

const getWeather = async ()=>{
    try{
        const cityName = document.getElementById("SearchBarInput").value
        const weatherFetching = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=154ce9c4290971119d1e19bac1a4e4ad&units=metric`,
            {
                headers:{
                    Accept:'application/json'
                }
            
            });
            const weatherData = await weatherFetching.json()
            console.log(weatherData)
            city.innerHTML = `${weatherData.name}`
            description.innerHTML = `${weatherData.weather[0].main}`
            tempImage.innerHTML =  `<img src="https://openweathermap.org/img/wn/10d@2x.png"/>`
            temp.innerHTML = `<h5>${Math.round(weatherData.main.temp)}°C</h5>`
            tempMax.innerHTML=`${weatherData.main.temp_max}°C`
            tempMin.innerHTML=`${weatherData.main.temp_min}°C`

    }

    catch(error){
        console.log(error)
    }
    
}