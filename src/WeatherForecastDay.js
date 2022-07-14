import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function WeatherForecastDay(props) {
  function maxTemperature() {
    let temperature = Math.round(props.data.temp.max);
    return `${temperature}º`;
  }

  function minTemperature() {
    let temperature = Math.round(props.data.temp.min);
    return `${temperature}º`;
  }

  function day() {
    let date = new Date(props.data.dt * 1000);
    let day = date.getDay();

    let days = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];

    return days[day];
  }

  return (
    <div className="WeahterForecastDay">
        <div className="WeatherForecastDay text-white text-center">{day()}</div>
        <div className="text-center py-3">
          <WeatherIcon code={props.data.weather[0].icon} size={40} />
        </div>
        <div className="WeatherForecast-temperatures text-center text-white">
          <span className="WeatherForecast-temperature-min text-white">
            {minTemperature()}
          </span>{" "}
          |
          <span className="WeatherForecast-temperature-max text-white fw-bold">
            {" "}
            {maxTemperature()}
          </span>
        </div>
    </div>
  );
}
