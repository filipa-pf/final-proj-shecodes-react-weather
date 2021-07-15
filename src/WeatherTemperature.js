import React, { useState } from "react";


export default function WeatherTemperature(props){
const [unit, setUnit] = useState("celsius")

    function showFahrenheit(event){
      event.preventDefault();
      setUnit("fahrenheit");
  }
  function showCelsius(event){
      event.preventDefault();
      setUnit("celsius");
      let changeTempToCelsius = document.querySelector("#showTemperature")
       changeTempToCelsius.innerHTML = props.celsius
  }

   if (unit === "celsius"){
       
       return (<span className="units"> 
                  ºC | <a href="/" onClick={showFahrenheit}>ºF</a>
              </span>) 
   } else {
       let fahrenheit = Math.round((props.celsius * 9/5) + 32)
       let changeTempToFahrenheit = document.querySelector("#showTemperature")
       changeTempToFahrenheit.innerHTML = fahrenheit
       return (<span className="units">
                  <a href="/" onClick={showCelsius}>ºC</a> | ºF
              </span>) 
   }
}