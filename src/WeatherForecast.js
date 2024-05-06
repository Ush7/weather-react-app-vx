import React from "react";

import WeatherIcon from "./WeatherIcon";
import "./WeatherForecast.css";
import axios from "axios";

export default function (props) {
  function handleResponse(response) {
    console.log(response.data);
  }
  const apiKey = "8c48afa47a9a9c24f3500c7039d50aaa";
  let lat = props.coordinates.lat;
  let lon = props.coordinates.lon;
  let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;

  axios.get(apiUrl).then(handleResponse);

  return (
    <div className="WeatherForecast">
      <div className="row">
        <div className="col">
          <div className="WeatherForecast-day">Day 1</div>
          <WeatherIcon code="11d" size={32} />
          <div className="WeatherForecast-temp">
            <span className="WeatherForecast-temp-max">25° |</span>{" "}
            <span className="WeatherForecast-temp-min">19°</span>
          </div>
        </div>
      </div>
    </div>
  );
}
