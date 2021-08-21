import React, { useState } from "react";
import axios from "axios";
import TimeAndDate from "./TimeAndDate.js";
import "./TimeAndDate.css";
import WeatherTemperature from "./WeatherTemperature";


export default function WeatherDetails(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [weatherForecastData, setWeatherForecastData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);

  function search() {
    const apiKey = "f954ae778b55e3491e6dfa10c0b00af8";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    let apiUrlForecast = `https://api.openweathermap.org/data/2.5/forecast/daily?q=${city}&appid=${apiKey}`;
    axios.get(apiUrl).then(handleResponse);
    axios.get(apiUrlForecast).then(handleResponseForecast);
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
      coord: response.data.coord,
      temperature: Math.round(response.data.main.temp),
      humidity: response.data.main.humidity,
      condition: response.data.weather[0].description,
      windSpeed: Math.round(response.data.wind.speed * 3.6),
      iconUrl: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
      date: new Date(response.data.dt * 1000),
      city: response.data.name,
    });
  }


  function handleResponseForecast(response) {
    setWeatherForecastData({
      coord: response.data.coord,
      temperatureMax: Math.round(response.list.temp.max),
      temperatureMin: Math.round(response.list.temp.min),
      iconUrlForecast: `http://openweathermap.org/img/wn/${response.list.weather[0].icon}@2x.png`,
      weekDay: response.list.temp.day,
    });
  }

  if (weatherData.ready) {
    return (
      <div className="WeatherDetails">
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
            </form>
          </div>
          <div className="col-sm-4">
            <img src={weatherData.iconUrl} alt="weather-symbol" id="icon" />
          </div>
          <div className="col-sm-4 temp-info">
            <div className="temp">
              <div>
                <strong id="showTemperature">{weatherData.temperature}</strong>
                <WeatherTemperature celsius={weatherData.temperature} />
              </div>
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
          <div className="WeatherForecast">
            <div className="row">
              <div className="col">
                <div className="WeatherForecast-day">
                  {weatherForecastData.weekDay}
                </div>
                <div>
                  <img className="WeatherForecast-icon" src={weatherForecastData.iconUrlForecast} alt="weather-symbol" id="icon" />
                </div>
                <div className="WeatherForecast-temperatures">
                  <span className="WeatherForecast-temperature-min">{weatherForecastData.temperatureMin}º </span><span className="WeatherForecast-temperature-max">{weatherForecastData.temperatureMin}º</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    search();
    return "Loading...";
  }
}
