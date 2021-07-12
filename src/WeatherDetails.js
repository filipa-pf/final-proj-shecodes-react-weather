import React, { useState } from "react";
import axios from "axios";

export default function WeatherDetails() {
  const apiKey = "bcd6bffb67c533bc97521b927a7799b4";
  const [ready, setReady] = useState(false);
  const [temperature, setTemperature] = useState(null);

  function handleResponse(response){
      setTemperature(Math.round(response.data.main.temp));
      setReady(true);
  }

  if (ready) {
    let href = "";
    return (
      <div className="row">
        <div className="col-sm-4">
          <form id="searched-city">
            <span className="col city" id="placeInPage">
              Lisbon
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
            <strong id="showTemperature">{temperature}</strong>
            <span class="units">
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
                Humidity: <span id="humidity">12</span>%
              </li>

              <li>
                Condition: <span id="condition">Clear</span>
              </li>
              <li>
                Wind speed: <span id="wind">12</span> km/h
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  } else {
    let city = "London";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
    return "Loading...";
  }
}
