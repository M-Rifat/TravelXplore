import React, { useState } from "react";
import "./WeatherStyle.css";

const api = {
  key: process.env.REACT_APP_API_KEY,
  base: "https://api.openweathermap.org/data/2.5/",
};

const Weather = () => {
  const [search, setSearch] = useState("");
  const [weather, setWeather] = useState({});

  const searchPressed = () => {
    fetch(`${api.base}weather?q=${search}&units=metric&APPID=${api.key}`)
      .then((res) => res.json())
      .then((result) => {
        setWeather(result);
      });
  };

  return (
    <div className="weatherContainer">
      <h2>Find Weather Forecasts of Your Favourite Places</h2>
      <div className="search-container">
        <input
          type="text"
          placeholder="Enter city/town..."
          onChange={(e) => setSearch(e.target.value)}
        />
        <button onClick={searchPressed}>Search</button>
      </div>

      {typeof weather.main !== "undefined" ? (
        <div className="info">
          <p className="city">{weather.name}</p>

          <p className="temp">{weather.main.temp} °C</p>

          <p className="condition">{weather.weather[0].main}</p>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default Weather;
