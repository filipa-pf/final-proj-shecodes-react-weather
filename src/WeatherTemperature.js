import React, { useState } from "react";
import "./WeatherTemperature.css";

export default function WeatherTemperature(props) {
  const [unit, setUnit] = useState("celsius");
  function convertToFahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }

  function convertToCelsius(event) {
    event.preventDefault();
    setUnit("celsius");
  }

  function fahrenheit(){
    return ( props.celsius * 9) / 5 + 32;
  }

  if (unit === "celsius") {
    return (
      <span className="WeatherTemperature">
          <p className="text-center display-5 text-white fw-bold">
            {Math.round(props.celsius)}
            <span className="fs-5 fw-normal unit">
              ºC |{" "}
              <a href="/" onClick={convertToFahrenheit} className="text-white">
                ºF
              </a>
            </span>
          </p>
        </span>
    );
  } else {
   
    return (
      <span className="WeatherTemperature">
          <p className="text-center display-5 text-white fw-bold">
            {Math.round(fahrenheit())}
            <span className="fs-5 fw-normal unit">
              <a href="/" onClick={convertToCelsius} className="text-white">
                ºC
              </a>{" "}
              | ºF
            </span>
          </p>
        </span>
    );
  }
}
