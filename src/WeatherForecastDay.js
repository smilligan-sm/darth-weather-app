import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function WeatherForecastDay(props) {
    function maxTemperature() {
        let temperature = Math.round(props.data.temperature.maximum);
        return `${temperature}°`;
    }
    function minTemperature() {
        let temperature = Math.round(props.data.temperature.minimum);
        return `${temperature}°`;
    }

    function day() {
        let date = new Date(props.data.time * 1000);
        let day = date.getDay();

        let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
        return days[day];
    }

    return (
        <div className="row">
            <div className="col">
                <div className="WeatherForecast-day">{day()}</div>   
            </div>
            <div className="col-5">
                <div className="WeatherForecast-description">
                    <div className="text-capitalize">{props.data.condition.description}</div>
                </div>
            </div>
            <div className="col">
                <div className="WeatherForecast-icon"><WeatherIcon code={props.data.condition.icon} size={25}/></div>
            </div>
            <div className="col">
                <div className="WeatherForecast-temperatures">
                    <span className="WeatherForecast-temperatures-min">{minTemperature()} </span>
                    <span className="WeatherForecast-temperatures-max">{maxTemperature()}</span>
                </div>
            </div>
        </div> 
    )
}