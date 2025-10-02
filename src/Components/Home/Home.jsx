import React, { useEffect, useState } from 'react'
import './Home.css'
import { WiDaySunny, WiNightClear, WiRain } from "react-icons/wi"
import useHandleAPI from '../useHandleAPI'

export default function Home() {

    const ApiKey = import.meta.env.VITE_API_KEY
    const { city, setCity, weather, getApiData } = useHandleAPI(ApiKey)
    async function handleSearch(e) {
        e.preventDefault()
        await getApiData(city)
        setCity('')


    }

    useEffect(() => {
        if (city) {
            getApiData(city)
        }
    }, []);



    if (!weather) {
        return <p>Loading</p>
    }
    return (
        <>
            {/* 
            <h2>{weather.main.temp}</h2> */}
            {/* <div className='row d-flex align-items-center justify-content-center'>
                <div className='bg-primary text-light rounded-4  ' style={{width: 'fit-content', height: "fit-content" }}>
                    <h3 className='text-center'>Weather {<WiDaySunny size={40} color="orange bg" />} </h3>
                    <form className="d-flex" role="search" onSubmit={handleSearch}>
                        <input className="form-control me-2" type="search" placeholder="Enter City Name" aria-label="Search" value={city} onChange={(e) => setCity(e.target.value)} />
                        <button className="btn btn-outline-success" type="submit">Search</button>
                    </form>
                   
                    <h3 className='text-center'>{weather?.name}, {weather?.sys?.country}</h3>
                    <h2 className='text-center'>{(weather?.main?.temp - 273.5).toFixed(1)}°C </h2>
                    <p className='px-3 fs-3'>Fell Like : <span className='fw-bold'>{(weather?.main?.feels_like - 273.5).toFixed(1)}°C </span></p>
                    <p className='text-center'>{weather?.weather?.[0].main}</p>


                    <div className='d-flex justify-content-between'>
                        <p>Humidity: {weather?.main?.humidity}</p>
                        <p>Wind: {weather?.wind?.speed}</p>
                    </div>
                    <div className='d-flex justify-content-between'>
                        <p>Sunrise: {new Date(weather?.sys?.sunrise * 1000).toLocaleTimeString('en-IN')}</p>
                        <p>Sunset: {new Date(weather?.sys?.sunset * 1000).toLocaleTimeString('en-IN')}</p>
                    </div>
                </div>
            </div> */}






            <div class="weather-app">

                <div class="weather-card">

                    {/* <!-- SEARCH ROW --> */}
                    <div class="d-flex align-items-center justify-content-between gap-3 mb-2">
                        <div>
                            <h3 style={{ margin: 0 }}>Open Weather</h3>
                            <small style={{ opacity: 0.9 }}>{weather.weather[0].description} & {new Date(weather.dt * 1000).toLocaleTimeString('en-IN', { hour: '2-digit', minute: '2-digit' })}</small>
                        </div>

                        <form id="searchForm" class="search-bar d-flex" style={{
                            width: "52%" 
                        }} onSubmit={handleSearch} >
                            <input id="cityInput" class="form-control me-2" type="search" placeholder="Enter city (e.g. Patna)" aria-label="Search" value={city} onChange={(e) => setCity(e.target.value)} />
                            <button id="searchBtn" class="btn btn-light">Search</button>
                        </form>
                    </div>

                    {/* <!-- MAIN WEATHER --> */}
                    <div class="weather-main">
                        <div class="weather-info">
                            <div class="weather-city" id="cityName">{weather?.name}, {weather?.sys?.country}</div>
                            <div class="weather-temp" id="temp">{(weather?.main?.temp - 273.5).toFixed(1)} °C</div>
                            <div class="weather-desc" id="desc">{weather?.weather[0]?.main}</div>
                            <div style={{
                                "margin-top": "8px", "color": "#ffffffd9"
                            }}>
                                <small>Updated: {new Date((weather?.dt + weather?.timezone) * 1000)
                                    .toLocaleTimeString('en-IN', { hour: '2-digit', minute: '2-digit' })}<span id="updatedTime"></span></small>
                            </div>
                        </div>

                        <div class="weather-icon" id="iconWrap">
                            <img id="weatherIcon" src={`https://openweathermap.org/img/wn/${weather?.weather[0].icon}@2x.png `} alt={weather.weather[0].desc} />
                        </div>
                    </div>


                    <div class="details-row">
                        <div class="detail">
                            <span class="label">Humidity
                            </span>
                            <span class="value" id="humidity">{weather?.main?.humidity} %</span>
                        </div>
                        <div class="detail">
                            <span class="label">Wind</span>
                            <span class="value" id="wind">{weather?.wind?.speed}m/s</span>
                        </div>
                        <div class="detail">
                            <span class="label">Sunrise</span>
                            <span class="value" id="sunrise">{new Date(weather?.sys?.sunrise * 1000).toLocaleTimeString('en-IN', { hour: '2-digit', minute: '2-digit' })}</span>
                        </div>
                        <div class="detail">
                            <span class="label">Sunset</span>
                            <span class="value" id="sunset">{new Date(weather?.sys?.sunset * 1000).toLocaleTimeString('en-IN', { hour: '2-digit', minute: '2-digit' })}</span>
                        </div>
                    </div>

                    <div class="small-note">Powered by OpenWeather · Design by  <span className='text-warning fw-bold'>Anurag Mishra</span> 😎</div>

                </div >

            </div >
        </>
    )
}
