import React, { useState } from "react";
import axios from "axios";

export default function WeatherForecast(props) {

  const [forecast, setForecast] = useState(null);

  function handleResponse(response) {
    setForecast(response.data.daily);
  }

let apiKey = "f954ae778b55e3491e6dfa10c0b00af8";
  let latitude = props.coordinates.lat;
  let longitude = props.coordinates.long;
  let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&exclude={part}&appid=${apiKey}&units=metric`;

  axios.get(apiUrl).then(handleResponse);

  return (
    <div className="WeatherForecast">
      <div className="row">
        <div className="col">
          <div className="WeatherForecast-day">Thu</div>
          <img src="" alt="weather-symbol" id="icon" />
          <div className="WeatherForecast-temperatures">
            <span className="WeatherForecast-temperature-max">
              {forecast[0].temp.min}
            </span>
            <span className="WeatherForecast-temperature-min">10°</span>
          </div>
        </div>
      </div>
    </div>
  );
}
