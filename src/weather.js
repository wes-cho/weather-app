export { link, getWeather };
import { degreeify, capitalize } from './helper.js';

const link = "weather.js loaded";

class weatherObject {
    constructor(location, temp, todayHigh, todayLow, tmrwHigh, tmrwLow, ovrHigh, ovrLow, conditions){
        this.location = location;
        this.temp = temp;
        this.high = todayHigh;
        this.low = todayLow;
        this.tmrwHigh = tmrwHigh;
        this.tmrwLow = tmrwLow;
        this.ovrHigh = ovrHigh;
        this.ovrLow = ovrLow;
        this.conditions = conditions;
    };
};

async function getWeather(location){
    try {
        const response = await fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}/?key=SX3RZTE2R4U2XD2K5QUF9SP4G`, {mode: 'cors'});
        const weatherData = await response.json();
        const current = weatherData.currentConditions;
        const today = weatherData.days[0];
        const tomorrow = weatherData.days[1];
        const overmorrow = weatherData.days[2];
        const weather = new weatherObject(
            weatherData.resolvedAddress.split(',')[0],
            degreeify(current.temp),
            degreeify(today.tempmax),
            degreeify(today.tempmin),
            degreeify(tomorrow.tempmax),
            degreeify(tomorrow.tempmin),
            degreeify(overmorrow.tempmax),
            degreeify(overmorrow.tempmin),
            capitalize(current.conditions),
        );

        return weather;

    } catch (error) {
        console.log(error)
    };
};