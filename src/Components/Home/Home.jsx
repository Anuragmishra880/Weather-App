import React, { useEffect, useState } from 'react'
import './Home.css'
import { WiDaySunny, WiNightClear, WiRain } from "react-icons/wi"
import HomeShimmerEffect from '../HomeShimmerEffect/HomeShimmerEffect'
import useHandleAPI from '../CustomHooks/useHandleAPI'

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
        return <HomeShimmerEffect />

    }
    return (
        <>

            <div className="weather-app">

                <div className="weather-card">

                    {/* <!-- SEARCH ROW --> */}
                    <div className="d-flex align-items-center justify-content-between gap-3 mb-2">
                        <div>
                            <h3 style={{ margin: 0 }}>Open Weather</h3>
                            <small style={{ opacity: 0.9 }}>{weather.weather[0].description} & {new Date(weather.dt * 1000).toLocaleTimeString('en-IN', { hour: '2-digit', minute: '2-digit' })}</small>
                        </div>

                        <form id="searchForm" className="search-bar d-flex" style={{
                            width: "52%"
                        }} onSubmit={handleSearch} >
                            <input id="cityInput" className="form-control me-2" type="search" placeholder="Enter city (e.g. Patna)" aria-label="Search" value={city} onChange={(e) => setCity(e.target.value)} />
                            <button id="searchBtn" className="btn btn-light">Search</button>
                        </form>
                    </div>

                    {/* <!-- MAIN WEATHER --> */}
                    <div className="weather-main">
                        <div className="weather-info">
                            <div className="weather-city" id="cityName">{weather?.name}, {weather?.sys?.country}</div>
                            <div className="weather-temp" id="temp">{(weather?.main?.temp - 273.5).toFixed(1)} °C</div>
                            <div className="weather-desc" id="desc">{weather?.weather[0]?.main}</div>
                            <div style={{
                                "marginTop": "8px", "color": "#ffffffd9"
                            }}>
                                <small>Updated: {new Date((weather?.dt + weather?.timezone) * 1000)
                                    .toLocaleTimeString('en-IN', { hour: '2-digit', minute: '2-digit' })}<span id="updatedTime"></span></small>
                            </div>
                        </div>

                        <div className="weather-icon" id="iconWrap">
                            <img id="weatherIcon" src={`https://openweathermap.org/img/wn/${weather?.weather[0].icon}@2x.png `} alt={weather.weather[0].desc} />
                        </div>
                    </div>


                    <div className="details-row">
                        <div className="detail">
                            <span className="label">Humidity
                            </span>
                            <span className="value" id="humidity">{weather?.main?.humidity} %</span>
                        </div>
                        <div className="detail">
                            <span className="label">Wind</span>
                            <span className="value" id="wind">{weather?.wind?.speed}m/s</span>
                        </div>
                        <div className="detail">
                            <span className="label">Sunrise</span>
                            <span className="value" id="sunrise">{new Date(weather?.sys?.sunrise * 1000).toLocaleTimeString('en-IN', { hour: '2-digit', minute: '2-digit' })}</span>
                        </div>
                        <div className="detail">
                            <span className="label">Sunset</span>
                            <span className="value" id="sunset">{new Date(weather?.sys?.sunset * 1000).toLocaleTimeString('en-IN', { hour: '2-digit', minute: '2-digit' })}</span>
                        </div>
                    </div>

                    <div className="small-note">Powered by OpenWeather · Design by  <span className='text-warning fw-bold'>Anurag Mishra</span> 😎</div>

                </div >

            </div >
        </>
    )
}
