import React from "react";
import TimeAndDate from "./TimeAndDate";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";

export default function WeatherInfo(props) {
  return (
    <span className="WeatherInfo">
      <div className="row d-flex justify-content-center px-2">
        <div className="col-12 col-sm-4 text-center">
          <h1 className="text-white">{props.data.city}</h1>
          <div className="text-white my-0">
            <TimeAndDate date={props.data.date} />
          </div>
          <p className="text-white pb-2">{props.data.description}</p>
        </div>
        <div className="col-8 col-sm-4 text-center">
          <WeatherIcon code={props.data.icon} size={55} />
          <WeatherTemperature celsius={props.data.temperature} />
        </div>
        <div className="col-12 col-sm-4  text-center">
          <p className="text-white">Precipitation: 15%</p>
          <p className="text-white">Humidity: {props.data.humidity}%</p>
          <p className="text-white">Wind: {props.data.wind} km/h</p>
        </div>
      </div>
    </span>
  );
}
 