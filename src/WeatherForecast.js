import React, { useState } from "react";
import WeatherIcon from "./WeatherIcon";
import "./WeatherForecast.css";
import axios from "axios";
import WeatherForecastDay from "./WeatherForecastDay";

export default function (props) {
  let [forecastLoaded, setforecastLoaded] = useState(false);
  let [forecastData, setforecastData] = useState(null);
  function handleResponse(response) {
    setforecastLoaded(true);
    setforecastData(response.data.daily);
    // console.log(response.data);
  }

  if (forecastLoaded) {
    return (
      <div className="WeatherForecast">
        <div className="row">
          <div className="col">
            <WeatherForecastDay data={forecastData[0]} />
          </div>
        </div>
      </div>
    );
  } else {
    const apiKey = "8c48afa47a9a9c24f3500c7039d50aaa";
    let lat = props.coordinates.lat;
    let lon = props.coordinates.lon;
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;

    axios.get(apiUrl).then(handleResponse);
    return null;
  }
}
