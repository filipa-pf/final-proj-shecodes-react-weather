import React, { useState } from "react";
import "./Weather.css";
import "./TimeAndDate.css";
import axios from "axios";
import WeatherInfo from "./WeatherInfo";
import WeatherForecast from "./WeatherForecast";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);
  function handleResponse(response) {
    setWeatherData({
      ready: true,
      coordinates: response.data.coord,
      temperature: response.data.main.temp,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      city: response.data.name,
      description: response.data.weather[0].description,
      icon: response.data.weather[0].icon,
      date: new Date(response.data.dt * 1000),
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function search() {
    const apiKey = "f954ae778b55e3491e6dfa10c0b00af8";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleCityChange(event) {
    setCity(event.target.value);
  }

  if (weatherData.ready) {
    return (
      <div className="Weather">
        <div className="card">
          <div className="card-body card-img">
            <form onSubmit={handleSubmit}>
              <div className="row py-4 justify-content-center">
                <div className="col-10 col-sm-4 py-2 px-2">
                  <input
                    type="search"
                    placeholder="Enter a city..."
                    className="form-control"
                    onChange={handleCityChange}
                  />
                </div>
                <div className="col-5 col-sm-1 py-2 px-2">
                  <input
                    type="submit"
                    value="Search"
                    className="btn btn-light d-block mx-auto"
                  />
                </div>
              </div>
            </form>
          
              <WeatherInfo data={weatherData} />
              <hr className="text-white"></hr>
            <WeatherForecast coordinates={weatherData.coordinates} />
            </div>
          </div>
        </div>
      
    );
  } else {
    search();

    return "Loading...";
  }
}
