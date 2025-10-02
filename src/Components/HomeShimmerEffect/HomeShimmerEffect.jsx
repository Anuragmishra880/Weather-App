import React from 'react'
import './HomeShimmerEffect.css'
// import '../Home/Home.css'
export default function HomeShimmerEffect() {
    return (
        <div className="weather-app ">

            <div className="shimmer-card">

                {/* <!-- SEARCH ROW --> */}
                <div className="d-flex align-items-center justify-content-between gap-3 mb-2">
                    <div>
                        <h3 style={{ margin: 0 }}></h3>
                        <small style={{ opacity: 0.9 }}></small>
                    </div>

                    <form id="searchForm" className="search-bar d-flex" style={{
                        width: "52%"
                    }}>
                        <input id="cityInput" className="form-control me-2" type="search"  aria-label="Search"  />
                        <button id="searchBtn" className="btn btn-secondary"></button>
                    </form>
                </div>

                {/* <!-- MAIN WEATHER --> */}
                <div className="weather-main">
                    <div className="weather-info">
                        <div className="weather-city" id="cityName"></div>
                        <div className="weather-temp" id="temp"></div>
                        <div className="weather-desc" id="desc"></div>
                        <div style={{
                            "marginTop": "8px", "color": "#ffffffd9"
                        }}>
                            <small><span id="updatedTime"></span></small>
                        </div>
                    </div>

                    <div className="weather-icon shimmer-icon" id="iconWrap">
                    </div>
                </div>


                <div className="DetailsShimmerRow">
                    <div className="detail">
                        <span className="label">
                        </span>
                        <span className="value" id="humidity"></span>
                    </div>
                    <div className="detail">
                        <span className="label"></span>
                        <span className="value" id="wind"></span>
                    </div>
                    <div className="detail">
                        <span className="label"></span>
                        <span className="value" id="sunrise"></span>
                    </div>
                    <div className="detail">
                        <span className="label"></span>
                        <span className="value" id="sunset"></span>
                    </div>
                </div>

                <div className="small-note">  <span className='text-warning fw-bold'></span> </div>

            </div >

        </div >
    )
}
