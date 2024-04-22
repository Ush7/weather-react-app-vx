import React from "react";
import "./Weather.css";

export default function Weather() {
  return (
    <div className="Weather">
      <div className="container-md weatherbox">
        <div className="card">
          <div className="row heading-section">
            <div className="col-5">
              <h2 className="city" id="city">
                Toronto
              </h2>
              <h7>
                <div>
                  <span id="update">Last Updated:</span>
                  <span id="date">Thursday, 8:00 </span>
                </div>
                <div id="weatherDescription">Sunny</div>
              </h7>
            </div>
            <div className="col-6">
              <form className="d-flex" id="enter-city-form">
                <input
                  className="form-control me-2"
                  type="search"
                  placeholder="Enter City"
                  id="enter-city-input"
                />
                <button
                  className="btn btn-primary"
                  type="submit"
                  id="searchButton"
                >
                  Search
                </button>
              </form>
            </div>
          </div>
          <div className="row">
            <div className="col-5">
              <div className="d-flex todaycolumn1">
                <div>
                  <img
                    src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png"
                    alt="Clear"
                    id="iconToday"
                  />
                </div>
                <div className="current-temp" id="temperature">
                  12
                </div>
                <span className="degree" id="celsiusLink">
                  °C{" "}
                </span>
              </div>
            </div>
            <div className="col-7">
              <ul className="todaycolumn2">
                <li>
                  <div className="todays-high-low">
                    <i className="fa-solid fa-temperature-arrow-up"></i>
                    <span id="highTemp">25</span>°C |
                    <i className="fa-solid fa-temperature-arrow-down"></i>
                    <span id="lowTemp"> 10</span>°C
                  </div>
                </li>
                <li>
                  <div className="todays-precipitation">
                    <i className="fa-solid fa-wind"></i> Wind:
                    <span id="wind">6</span> km/h
                  </div>
                </li>
                <li>
                  <div className="todays-humidity">
                    <i className="fa-solid fa-droplet"></i> Humidity:
                    <span id="humidity">40</span>%
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <h4>5-Day Forecast</h4>
          <div className="weather-forecast" id="forecast"></div>
        </div>
      </div>
    </div>
  );
}
