import "./styles.css";
import { link, getWeather } from "./weather.js";

console.log(link);

const container = document.querySelector('#weatherCardContainer');
const location = document.querySelector("#location");
const go = document.querySelector("#go");
go.addEventListener("click", () => {
    getWeather(location.value).then((weather)=> {
        container.replaceChildren();
        const statement = document.createElement('p');
        statement.innerHTML = `It is currently <strong><i>${weather.conditions}</i></strong> in <strong><i>${weather.location}</i></strong>`
        statement.setAttribute('id', 'statement');
        container.appendChild(statement);
    });
});