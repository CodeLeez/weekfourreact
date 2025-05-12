import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCloud,
  faCloudSun,
  faSun,
  faCloudRain,
  faSearch,
} from "@fortawesome/free-solid-svg-icons";

export default function WeatherApp() {
  const [city, setCity] = useState("");
  const [weatherData, setWeatherData] = useState({
    city: "Shanghai",
    temperature: 37,
    humidity: 94,
    description: "broken clouds",
    date: "Monday 12:18",
    forecast: [
      { day: "Mon", high: 23, low: 11, icon: "cloud-sun" },
      { day: "Tue", high: 54, low: 13, icon: "sun" },
      { day: "Wed", high: 65, low: 16, icon: "cloud" },
      { day: "Thur", high: 87, low: 18, icon: "cloud-sun" },
      { day: "Fri", high: 41, low: 12, icon: "cloud-rain" },
    ],
  });

  const handleSearch = (e) => {
    e.preventDefault();
    console.log(`Searching for ${city}`);
  };

  const renderWeatherIcon = (iconType) => {
    switch (iconType) {
      case "cloud":
        return <FontAwesomeIcon icon={faCloud} size="2x" />;
      case "cloud-sun":
        return <FontAwesomeIcon icon={faCloudSun} size="2x" />;
      case "sun":
        return <FontAwesomeIcon icon={faSun} size="2x" />;
      case "cloud-rain":
        return <FontAwesomeIcon icon={faCloudRain} size="2x" />;
      default:
        return <FontAwesomeIcon icon={faSearch} size="2x" />;
    }
  };

  return (
    <div className="weather-app">
      <div className="container">
        <header className="header">
          <div className="logo">
            <img
              src="https://www.shecodes.io/assets/branding/logo-shecodes-f9fa0540d113c086f61eb6e89466c0cbd24a42163b6a96d4b01da078803f53ee.png"
              alt="SheCodes Logo"
            />
          </div>
          <form className="search-form" onSubmit={handleSearch}>
            <input
              type="text"
              placeholder=" Enter a city.."
              value={city}
              onChange={(e) => setCity(e.target.value)}
              className="search-input"
            />
            <button type="submit" className="search-button">
              {" "}
              Search
            </button>
          </form>
        </header>

        <main className="weather-content">
          <div className="current-weather">
            <div className="weather-info">
              <h1 className="city">{weatherData.city}</h1>
              <p className="date">
                {" "}
                {weatherData.date}, {weatherData.description}{" "}
              </p>
              <p className="details">
                {" "}
                Humidity :{" "}
                <span className="humidity">{weatherData.humidity}%</span>, Wind:{" "}
                <span className="wind">{weatherData.wind}km/h</span>
              </p>
            </div>

            <div className="temperature-display">
              <FontAwesomeIcon icon={faCloud} size="3x" />
              <div className="temperature">
                <span className="value">{weatherData.temperature}</span>
                <span className="unit"> &deg;C</span>
              </div>
            </div>
          </div>

          <div className="forecast">
            {weatherData.forecast.map((day, index) => (
              <div className="forecast-day" key={index}>
                <div className="day"> {day.day}</div>
                <div className="icon">{renderWeatherIcon(day.icon)}</div>

                <div className="temps">
                  <span className="high">{day.high}&deg;</span>
                  <span className="low">{day.low}&deg;</span>
                </div>
              </div>
            ))}
          </div>
        </main>

        <footer className="footer">
          <p>
            This project was coded by{" "}
            <a
              href="https://github.com/CodeLeez"
              target="_blank"
              rel="noopener noreferrer"
            >
              Elizabeth Chigudu
            </a>{" "}
            and is{" "}
            <a href="https://github.com/CodeLeez?tab=repositories">
              open-sourced on GitHub
            </a>{" "}
            and{" "}
            <a href="https://app.netlify.com/teams/codeleez/sites">
              {" "}
              hosted on Netlify
            </a>
          </p>
        </footer>
      </div>
    </div>
  );
}
