import React, { useState } from "react";
import axios from "axios";
import TimeAndDate from "./TimeAndDate.js";
import "./TimeAndDate.css";

export default function WeatherDetails(props) {
  
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);

  function search() {
    const apiKey = "f954ae778b55e3491e6dfa10c0b00af8";
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

  function handleResponse(response) {
    setWeatherData({
      ready: true,
      temperature: Math.round(response.data.main.temp),
      humidity: response.data.main.humidity,
      condition: response.data.weather[0].description,
      windSpeed: Math.round(response.data.wind.speed * 3.6),
      date: new Date(response.data.dt * 1000),
      city: response.data.name
    });
  }

  if (weatherData.ready) {
    let href = "";
    return (
      <div>
        <form id="city-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label className="lbl-color">Enter City</label>
            <input
              id="input-city"
              type="text"
              className="form-control input-max"
              autoComplete="off"
              onChange={handleCityChange}
            />
            <button
              type="submit"
              className="btn btn-light detailed-btn"
              id="btn1"
            >
              Check Weather!
            </button>
          </div>
        </form>
        <hr />
        <TimeAndDate date={weatherData.date} />
        <div className="row">
          <div className="col-sm-4">
            <form id="searched-city">
              <span className="col city" id="placeInPage">
                {weatherData.city}
              </span>
              <div>
                <button
                  type="submit"
                  className="btn btn-light detailed-btn btn2"
                  id="btn2"
                >
                  Check your city!
                </button>
              </div>
            </form>
          </div>
          <div className="col-sm-4">
            <img
              src="http://openweathermap.org/img/wn/10d@2x.png"
              alt="weather-symbol"
              id="icon"
            />
          </div>
          <div className="col-sm-4 temp-info">
            <div className="temp">
              <strong id="showTemperature">{weatherData.temperature}</strong>
              <span className="units">
                <a href={href} id="celsius" className="active">
                  Cº
                </a>{" "}
                |{" "}
                <a href={href} id="fahrenheit">
                  Fº
                </a>
              </span>
              <ul className="details">
                <li>
                  Humidity: <span id="humidity">{weatherData.humidity}</span>%
                </li>

                <li>
                  Condition: <span id="condition">{weatherData.condition}</span>
                </li>
                <li>
                  Wind speed: <span id="wind">{weatherData.windSpeed}</span>{" "}
                  km/h
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    search()
    return "Loading...";
  }
}
