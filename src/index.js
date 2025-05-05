import "./styles.css";
import { link, getWeather } from "./weather.js";
import sunPng from './weather-icons/Clear.png';
import cloudPng from './weather-icons/Overcast.png';
import partlyPng from './weather-icons/Partly Cloudy.png';
import rainPng from './weather-icons/Rain.png';
import snowPng from './weather-icons/Snow.png';
import windPng from './weather-icons/Wind.png';

console.log(link);

const container = document.querySelector('#weatherCardContainer');
const location = document.querySelector("#location");
const go = document.querySelector("#go");
location.addEventListener("keypress", (event) => {
    if (event.key === "Enter") {
    event.preventDefault();
    go.click();
    
    };
});
go.addEventListener("click", () => {
    getWeather(location.value).then((weather)=> {
        container.replaceChildren();

        // Display the location and current weather condition
        const statementContainer = document.createElement('div');
        statementContainer.setAttribute('id', 'statementContainer');
        container.appendChild(statementContainer);
        const statement = document.createElement('p');
        statement.innerHTML = `It is currently <strong><i>${weather.conditions}</i></strong> in <strong><i>${weather.location}</i></strong>`
        statement.setAttribute('id', 'statement');
        statementContainer.appendChild(statement);

        // Display the current temperature
        const currentTempsContainer = document.createElement('div');
        currentTempsContainer.setAttribute('id', 'currentTempsContainer');
        container.appendChild(currentTempsContainer);
        const temperature = document.createElement('p');
        temperature.textContent = weather.temp;
        temperature.setAttribute('id', 'current-temp');
        currentTempsContainer.appendChild(temperature);

        // Display the today's high and low temps
        const hiLow = document.createElement('p');
        hiLow.textContent = weather.low + ' / ' + weather.high;
        hiLow.setAttribute('id', 'hiLow');
        currentTempsContainer.appendChild(hiLow);

        // Create the weather icon based on the conditions
        if (weather.conditions.includes('Rain')){
            const rainIcon = document.createElement('img');
            rainIcon.src = rainPng;
            rainIcon.setAttribute('alt', 'rain');
            rainIcon.setAttribute('class', 'conditions-icon');
            container.appendChild(rainIcon);
        } else if (weather.conditions === 'Clear'){
            const clearIcon = document.createElement('img');
            clearIcon.src = sunPng;
            clearIcon.setAttribute('alt', 'sun');
            clearIcon.setAttribute('class', 'conditions-icon')
            container.appendChild(clearIcon); 
        } else if (weather.conditions.includes('Overcast')){
            const overcastIcon = document.createElement('img');
            overcastIcon.src = cloudPng;
            overcastIcon.setAttribute('alt', 'clouds');
            overcastIcon.setAttribute('class', 'conditions-icon');
            container.appendChild(overcastIcon);
        } else if (weather.conditions.includes('Partially Cloudy')){
            const partlyCloudyIcon = document.createElement('img');
            partlyCloudyIcon.src = partlyPng;
            partlyCloudyIcon.setAttribute('alt', 'sun behind clouds');
            partlyCloudyIcon.setAttribute('class', 'conditions-icon');
            container.appendChild(partlyCloudyIcon);
        } else if (weather.conditions.includes('Snow')){
            const snowIcon = document.createElement('img');
            snowIcon.src = snowPng;
            snowIcon.setAttribute('alt', 'snow');
            snowIcon.setAttribute('class', 'conditions-icon');
            container.appendChild(snowIcon);
        } else if (weather.conditions.includes('Wind')){
            const windIcon = document.createElement('img');
            windIcon.src = windPng;
            windIcon.setAttribute('alt', 'wind');
            windIcon.setAttribute('class', 'conditions-icon');
            container.appendChild(windIcon);
        };

        //Display tmrw and overmorrow's high and low temps
        const futureTempsContainer = document.createElement('div');
            futureTempsContainer.setAttribute('id', 'futureTempsContainer');
            container.appendChild(futureTempsContainer);
            const tmrwContainer = document.createElement('div');
                tmrwContainer.setAttribute('id', 'tmrwContainer');
                futureTempsContainer.appendChild(tmrwContainer);
                const tmrw = document.createElement('p');
                    tmrw.setAttribute('class', 'dayOfWeek');
                    tmrw.textContent = "Tomorrow";
                    tmrwContainer.appendChild(tmrw);
                const tmrwTemps = document.createElement('p');
                    tmrwTemps.setAttribute('class', 'futureHiLow');
                    tmrwTemps.textContent = weather.tmrwLow + ' / ' + weather.tmrwHigh;
                    tmrwContainer.appendChild(tmrwTemps);
            const overmorrowContainer = document.createElement('div');
                overmorrowContainer.setAttribute('id', 'overmorrowContainer');
                futureTempsContainer.appendChild(overmorrowContainer);
                const overmorrow = document.createElement('p');
                    overmorrow.setAttribute('class' , 'dayOfWeek');
                    overmorrow.textContent = "Overmorrow";
                    overmorrowContainer.appendChild(overmorrow);
                const overmorrowTemps = document.createElement('p');
                    overmorrowTemps.setAttribute('class', 'futureHiLow');
                    overmorrowTemps.textContent = weather.ovrLow + ' / ' + weather.ovrHigh;
                    overmorrowContainer.appendChild(overmorrowTemps);
    });
});

