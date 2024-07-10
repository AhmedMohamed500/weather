
const api = "373565ef7e0442cabfa222023240807";
let userInput = document.querySelector("input");

let weather = []


async function addWeather(){
    let res = await fetch("https://api.weatherapi.com/v1/forecast.json?key=373565ef7e0442cabfa222023240807&q=lond");
    let finly = await res.json() 
    console.log(finly);

    weather = finly.forecast.forecastday;
    displayWeather()
}
addWeather()




function displayWeather(){
    cartona =``;

    for (let i = 0; i < weather.length; i++) {
        
        cartona += `<div class="col-md-6 col-lg-4">

        <div class="weather-card">
            <div class="day-date border-1 rounded-top-2 text-white p-1 d-flex justify-content-between align-items-center">
                <h3 class="day">Saturday</h3>
                <p class="date">6 July</p>
            </div>

            <div class="weather-content bg-dark text-white">
                <div class="location">Cairo</div>
                <div class="degree">${weather[i].day.maxtemp_c}<sup>O</sup>C</div>
                <img src="${weather[i].day.condition.icon}"class="w-25 mx-auto" alt="">
                <div class="status">${weather[i].day.condition.text}</div>

                <span><i class="fa-solid fa-umbrella"></i>
                20%
                </span>

                <span><i class="fa-solid fa-wind"></i>
                    18km/h
                </span>

                <span><i class="fa-regular fa-compass"></i>
                    East
                </span>
            </div>

        </div>

    </div>

    <div class="col-md-6 col-lg-4">

        <div class="weather-card">
            <div class="day-date border-1 rounded-top-2 text-white p-1 d-flex justify-content-center align-items-center">
                <h3 class="day">Sunday</h3>
            </div>

            <div class="weather-content bg-dark text-white">
                <img src="${weather[i].day.condition.icon}"class="w-25 mx-auto" alt="">
                <div class="degree2 text-center">${weather[i].day.maxtemp_c}<sup>O</sup>C</div>
                
                <p class="text-center mt-3">${weather[i].day.mintemp_c}<sup>o</sup>

                </p>
                <div class="status text-center">${weather[i].day.condition.text}</div>

                
            </div>

        </div>

    </div>

    <div class="col-md-6 col-lg-4">

        <div class="weather-card">
            <div class="day-date border-1 rounded-top-2 text-white p-1 d-flex justify-content-center align-items-center">
                <h3 class="day">Monday</h3>
            </div>

            <div class="weather-content bg-dark text-white">
                <img src="${weather[i].day.condition.icon}"class="w-25 mx-auto" alt="">
                <div class="degree2 text-center">${weather[i].day.maxtemp_c}<sup>O</sup>C</div>
                
                <p class="text-center mt-3">${weather[i].day.mintemp_c}<sup>o</sup>

                </p>
                <div class="status text-center">${weather[i].day.condition.text}</div>
            </div>
        </div>
    </div>`  
        
    }
    document.querySelector("#myData").innerHTML = cartona
}

displayWeather()