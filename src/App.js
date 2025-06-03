import React from "react";
import Weather from "./Weather";
import './App.css';

export default function App() {
  return (
    <div className="app-background">
    <div className="App">
      <div className="container">
      <Weather defaultCity="Canberra" />
      <footer>
      Built by <a href="https://github.com/smilligan-sm" target="_blank" rel="noreferrer">Darth Milligan</a>, is open-sourced on <a href="https://github.com/smilligan-sm/darth-weather-app" target="_blank" rel="noreferrer">Github</a
      > and hosted on <a href="https://sm-darth-weather.netlify.app/" target="_blank" rel="noreferrer">Netlify</a>
    </footer>
    </div>
    </div>
    </div>
  );
}