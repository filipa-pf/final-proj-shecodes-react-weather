import { func } from "prop-types";
import React from "react";

export default function Forecast() {
  return (
    <div className="Forecast">
      <p className="forecast" id="forecast">
        5 Day Forecast
      </p>
      <hr />
      <div className="col">
        <div className="week-day">MON</div>

        <div>
          <img
            src="http://openweathermap.org/img/wn/10d@2x.png"
            alt="weather-symbol"
            id="icon-forecast"
          />
        </div>
        <div>
          <span id="forecast-temp-min" className="weather-forecast-min">
            22º-
          </span>
          <span id="forecast-temp-max" className="weather-forecast-max">
            18º
          </span>
        </div>
      </div>
    </div>
  );
}
