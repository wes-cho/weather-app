import "./styles.css";
import { link, getWeather } from "./weather.js";

console.log(link);

const location = document.querySelector("#location");
const go = document.querySelector("#go");
go.addEventListener("click", () => {
    getWeather(location.value).then((weather)=> {
        console.log(weather);
    });
});