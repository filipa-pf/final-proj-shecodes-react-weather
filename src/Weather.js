import React from "react";
import "./Weather.css";
import WeatherDetails from "./WeatherDetails.js";


import "./WeatherDetails.css";
import "./Forecast.css"


export default function Weather(){
    return (
        <div className="Weather">
            <div className="card">
                <div className="card-body card-img">
                    <WeatherDetails defaultCity="Lisbon"/> 
                </div>
            </div>
        </div>
    )
}