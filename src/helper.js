export const greeting = "helper.js loaded";
export { getWeather };

async function getWeather(location){
    try {
        const response = await fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}/?key=SX3RZTE2R4U2XD2K5QUF9SP4G`, {mode: 'cors'});
        const weatherData = await response.json();
        return weatherData;
    } catch (error) {
        console.log(error)
    };
};