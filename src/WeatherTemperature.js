import React from "react";

export default function WeatherTemperature(props) {
  
    return (
      <div className="WeatherTemperature">
        <div className="WeatherTemperatureCurrent">
          <h2 className="temperature">{Math.round(props.celsius)}</h2>
          <span className="Unit"> ℃</span>
        </div>
      </div>
    );

}