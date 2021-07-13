import React from "react";

export default function TimeAndDate(props) {
  
  let days = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
  let day = days[props.date.getDay()];
  let hours = props.date.getHours();
  let minutes = props.date.getMinutes();
  let months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
  ];
  let month = months[props.date.getMonth()];
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }
  if (hours < 10) {
    hours = `0${hours}`;
  }
  return (
    <div className="TimeAndDate">
      <h2>{day}, {props.date.getDate()} {month}</h2>
      <h3>{hours}:{minutes}</h3>
    </div>
  );
}
