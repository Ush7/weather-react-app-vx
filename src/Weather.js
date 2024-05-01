import React, { useState } from "react";
import FormattedDate from "./FormattedDate";
import axios from "axios";
import "./Weather.css";

export default function Weather(props) {
  const [weatherData, setWeatherdata] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);
  function handleResponse(response) {
    console.log(response.data);
    setWeatherdata({
      ready: true,
      temperature: Math.round(response.data.main.temp),
      humidity: response.data.main.humidity,
      wind: Math.round(response.data.wind.speed),
      description: response.data.weather[0].description,
      iconUrl: "https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png",
      tempMax: Math.round(response.data.main.temp_max),
      tempMin: Math.round(response.data.main.temp_min),
      date: new Date(response.data.dt * 1000),
      city: response.data.name,
    });
  }
  function search() {
    const apiKey = "8c48afa47a9a9c24f3500c7039d50aaa";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }
  function handleSubmit(event) {
    event.preventDefault();
    search();
  }
  function handleCityChange(event) {
    setCity(event.target.value);
  }
  if (weatherData.ready) {
    return (
      <div className="Weather">
        <div className="row heading-section">
          <div className="col-5">
            <h2 className="city" id="city">
              {weatherData.city}
            </h2>
            <h7>
              <div id="date">
                <FormattedDate date={weatherData.date} />
              </div>
              <div id="weatherDescription">{weatherData.description}</div>
            </h7>
          </div>
          <div className="col-7">
            <form
              className="d-flex"
              id="enter-city-form"
              onSubmit={handleSubmit}
            >
              <input
                className="form-control me-2"
                type="search"
                placeholder="Enter City"
                id="enter-city-input"
                onChange={handleCityChange}
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
                  src={weatherData.iconUrl}
                  alt={weatherData.description}
                  id="iconToday"
                />
              </div>
              <div className="current-temp" id="temperature">
                {weatherData.temperature}
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
                  <span id="highTemp">{weatherData.tempMax}</span>°C |
                  <span id="lowTemp"> {weatherData.tempMin}</span>
                  °C
                </div>
              </li>
              <li>
                <div className="todays-wind">
                  Wind:
                  <span id="wind">{weatherData.wind}</span> km/h
                </div>
              </li>
              <li>
                <div className="todays-humidity">
                  Humidity:
                  <span id="humidity">{weatherData.humidity}</span>%
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  } else {
    search();
    return "Loading...";
  }
}
