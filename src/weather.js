export { link, getWeather };

const link = "weather.js loaded";

class weatherObject {
    constructor(location, temp, todayHigh, todayLow, conditions){
        this.location = location;
        this.temp = temp;
        this.high = todayHigh;
        this.low = todayLow;
        this.conditions = conditions;
    };
};

async function getWeather(location){
    try {
        const response = await fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}/?key=SX3RZTE2R4U2XD2K5QUF9SP4G`, {mode: 'cors'});
        const weatherData = await response.json();
        const current = weatherData.currentConditions;
        const today = weatherData.days[0];
        // const tomorrow = weatherData.days[1];
        // const overmorrow = weatherData.days[2];
        const weather = new weatherObject(
            weatherData.resolvedAddress.split(',')[0],
            current.temp,
            today.tempmax,
            today.tempmin,
            current.conditions,
        );
        
        return weather;

    } catch (error) {
        console.log(error)
    };
};