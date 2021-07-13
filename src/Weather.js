import React from "react";
import "./Weather.css";
import WeatherDetails from "./WeatherDetails.js";
import Forecast from "./Forecast";
import "./TimeAndDate.css";
import "./WeatherDetails.css";
import "./Forecast.css"

export default function Weather(){
    return (
        <div className="Weather">
            <div className="card">
                <div className="card-body card-img">
                    <form id="city-form">
                        <div className="form-group">
                            <label className="lbl-color">Enter City</label>
                            <input id="input-city" type="text" className="form-control input-max" autoComplete="off"/>
                            <button type="submit" className="btn btn-light detailed-btn" id="btn1">Check Weather!
                            </button>
                        </div>
                    </form>
                    <hr />
                    <WeatherDetails defaultCity="Lisbon"/>
                    <Forecast />
                </div>
            </div>
        </div>
    )
}