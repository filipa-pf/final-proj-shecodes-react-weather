import React from "react";
import "./Weather.css";
import "./WeatherDetails.css";
import "./TimeAndDate.css";

export default function Weather() {
    const apiKey = "f954ae778b55e3491e6dfa10c0b00af8";
    let apiUrl = 
  return (
    <div className="Weather">
      <div className="card">
        <div className="card-body card-img">
          <form action="submit">
            <div className="row py-4 justify-content-center">
              <div className="col-10 col-sm-4 py-2 px-2">
                <input
                  type="search"
                  placeholder="Enter a city..."
                  className="form-control"
                />
              </div>
              <div className="col-5 col-sm-1 py-2 px-2">
                <input
                  type="submit"
                  value="Search"
                  className="btn btn-light d-block mx-auto"
                />
              </div>
            </div>
          </form>
          <div className="row justify-content-center px-5">
            <div className="col-12 col-sm-4 ps-sm-5">
              <h1 className="text-white">New York</h1>
              <ul className="ps-0 text-white">
                <li>Wednesday 07:00</li>
                <li>Mostly Cloudy</li>
              </ul>
            </div>

            <div className="col-8 col-sm-2">
                    <img
                src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png"
                alt="Mostly Cloudy"
                className="img-fluid d-block mx-auto"
              />
                    </div>
                    <div className="col-8 col-sm-2">
              <p className="text-center display-5 text-white fw-bold">6<span className="fs-5 fw-normal weather-unit">ºC</span></p>
            </div>
            <div className="col-12 col-sm-4">
              <ul className="text-white ps-0">
                <li>Precipitation: 15%</li>
                <li>Humidity: 72%</li>
                <li>Wind: 13 km/h</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
