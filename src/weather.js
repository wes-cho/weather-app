export { link, getWeather };

const link = "weather.js loaded";

class weatherObject {
    constructor(temp, feelsLike, high, low, description){
        this.temp = temp;
        this.feelsLike = feelsLike;
        this.high = high;
        this.low = low;
        this.description = description;
    };
};

async function getWeather(location){
    try {
        const response = await fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}/?key=SX3RZTE2R4U2XD2K5QUF9SP4G`, {mode: 'cors'});
        const weatherData = await response.json();
        const today = weatherData.days[0];
        const weather = new weatherObject(
            today.temp,
            today.feelslike,
            today.tempmax,
            today.tempmin,
            today.description
        );
        
        return weather;

    } catch (error) {
        console.log(error)
    };
};