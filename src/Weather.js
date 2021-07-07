import React from "react";
import "./Weather.css";
import WeatherDetails from "./WeatherDetails.js";
import TimeAndDate from "./TimeAndDate.js"

export default function Weather(){
    return (
        <div className="Weather">
            <div className="card">
                <div className="card-body card-img">
                    <form id="city-form">
                        <div className="form-group">
                            <label className="lbl-color">Enter City</label>
                            <input id="input-city" type="text" className="form-control input-max" autocomplete="off"/>
                            <button type="submit" className="btn btn-light detailed-btn" id="btn1">Check Weather!
                            </button>
                        </div>
                    </form>
                    <hr />
                    <TimeAndDate />
                    <WeatherDetails />
                </div>
            </div>
        </div>
    )
}