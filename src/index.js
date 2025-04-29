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
go.addEventListener("click", () => {
    getWeather(location.value).then((weather)=> {
        container.replaceChildren();
        const statementContainer = document.createElement('div');
        statementContainer.setAttribute('id', 'statementContainer');
        container.appendChild(statementContainer);
        const statement = document.createElement('p');
        statement.innerHTML = `It is currently <strong><i>${weather.conditions}</i></strong> in <strong><i>${weather.location}</i></strong>`
        statement.setAttribute('id', 'statement');
        statementContainer.appendChild(statement);

        const currentTempsContainer = document.createElement('div');
        currentTempsContainer.setAttribute('id', 'currentTempsContainer');
        container.appendChild(currentTempsContainer);

        const temperature = document.createElement('p');
        temperature.textContent = weather.temp;
        temperature.setAttribute('id', 'current-temp');
        currentTempsContainer.appendChild(temperature);

        const hiLow = document.createElement('p');
        hiLow.textContent = weather.low + ' / ' + weather.high;
        hiLow.setAttribute('id', 'hiLow');
        currentTempsContainer.appendChild(hiLow);

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
    });
});

