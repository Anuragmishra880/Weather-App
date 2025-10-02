import React, { useState } from 'react'

export default function useHandleAPI(ApiKey) {
    const [weather, setWeather] = useState()
    const [city, setCity] = useState('chakia')
    async function getApiData(cityName) {
        try {


            // *** Find City Name ***  //
            let geoUrl = `http://api.openweathermap.org/geo/1.0/direct?q=${cityName}&limit=5&appid=${ApiKey}`
            let geoResponse = await fetch(geoUrl)
            const geoData = await geoResponse.json();
            if (!geoData.length) {

                return ("City not found");

            }

            // const { lat, lon } = geoData[0];
            const lat = geoData[0].lat;
            const lon = geoData[0].lon

            let weatherUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${ApiKey}`;
            let weatherResponse = await fetch(weatherUrl);
            let data = await weatherResponse.json();
            setWeather(data)
            setCity("");

        }
        catch (error) {
            console.log(error);
        }

    }
    return (
        { city, weather, setCity, getApiData }
    )
}
