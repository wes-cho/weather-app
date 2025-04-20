import "./styles.css";
import { link, getWeather } from "./weather.js";

console.log(link);

const container = document.querySelector('#weatherCardContainer');
const location = document.querySelector("#location");
const go = document.querySelector("#go");
go.addEventListener("click", () => {
    getWeather(location.value).then((weather)=> {
        const statement = document.createElement('p');
        statement.textContent = `It is currently ${weather.conditions} in ${weather.location}`
        container.appendChild(statement);
    });
});