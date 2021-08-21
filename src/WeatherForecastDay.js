import React from "react";


export default function WeatherForecastDay(props){
    return function day(){
        let date = new Date(props.data.dt * 1000);
        let day = date.getDay();

        let days = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];

        return days[day];
    }
}