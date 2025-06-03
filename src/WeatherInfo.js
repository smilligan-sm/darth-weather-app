import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <div className="container">
        <div className="Weather-city">
          <div className="row">
            <h1>{props.data.displayCity || props.data.city}</h1>
            <div className="col-8">
            </div>
            <div className="col-4">
              <div className="date">
              <FormattedDate date={props.data.date} />
              </div>
            </div>
            </div>
      </div>
      <div className="Weather">
      <div className="row">
            <div className="col-6">
              <div>
                <WeatherTemperature celsius={props.data.temperature} />
              </div>
            </div>
            <div className="col-6">
              <div className="WeatherIcon">
              <WeatherIcon code={props.data.icon} size={97} />
              </div>
            </div>
      </div>

      <div className="WeatherDescription">
        <div className="text-capitalize">{props.data.description}</div>
      </div>
      <div className="TodaysDetails">
        <div>Feels Like: <strong>{props.data.feelslike}°c</strong></div>
        <div>Humidity: <strong>{props.data.humidity}%</strong></div>
        <div>Wind: <strong>{props.data.wind} km/h</strong></div>
        <div className="Comment">High chance that today will soon see the end of the Rebellion!</div>
      </div>
      </div>
      </div>
    </div>
    
  );
}