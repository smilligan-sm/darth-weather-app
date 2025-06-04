import React, { useState } from "react";
import WeatherInfo from "./WeatherInfo";
import WeatherForecast from "./WeatherForecast";
import axios from "axios";
import "./Weather.css";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);
  const [isDefaultCity, setIsDefaultCity] = useState(true); 

  function handleResponse(response) {
    setWeatherData({
      ready: true,
      coordinates: response.data.coordinates,
      temperature: response.data.temperature.current,
      date: new Date(response.data.time * 1000),
      wind: response.data.wind.speed,
      city: response.data.city,
      displayCity: isDefaultCity ? "DS-1 Orbital Station" : response.data.city,
      description: response.data.condition.description,
      humidity: response.data.temperature.humidity,
      icon: response.data.condition.icon,
      feelslike: Math.round(response.data.temperature.feels_like),
    });
  }

  function search() {
    let apiKey = "24f16ff06b6aba2369ec3846f0t8bco2";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleCityChange(event) {
    setCity(event.target.value);
    setIsDefaultCity(false);
  }

  if (weatherData.ready) {
    return (
      <div className="WeatherContainer">
           
        <div className="container">
        <div className="WeatherSearch">
        <p>Here at the Empire, we want to ensure your safety while you're out there fighting the rebel scum. Please check the weather conditions before heading out and ensure you dress accordingly.</p>
        <p>- Management</p>
        <form onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-9">
              <input
                type="search"
                placeholder="Enter a city.."
                className="form-control"
                autoFocus="on"
                onChange={handleCityChange}
              />
            </div>
            <div className="col-3">
              <input
                type="submit"
                value="Search"
                className="btn btn-primary w-100"
              />
            </div>
            </div>
        </form>
        </div>
        </div>  
        
            <div className="row d-flex">
            <div className="col-7">
            <div className="container-left">
            <WeatherInfo data={weatherData} />
            </div>
            </div>
             <div className="col-5 d-flex align-items-stretch">
              <div className="container-right w-100">
              <div className="WeatherForecast">
                <WeatherForecast city={weatherData.city} />
                </div>
              </div>
              </div>
          </div>
           

      </div>
    );
  } else {
    search();
    return "Loading..";
  }
}