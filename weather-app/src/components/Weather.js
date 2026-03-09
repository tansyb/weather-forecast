import React, { useState } from "react";

function Weather() {
  const [city, setCity] = React.useState("");
  const [weather, setWeather] = React.useState(null);

  const getWeather = async () => {
    const apiKey = "4d1c2342694c09ae03990484f6e6dcd4";

    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
    );

    const data = await response.json();
    setWeather(data);
  };

  return (
    <div>
      <h1>Weather Today</h1>

      <input
        type="text"
        placeholder="Enter city"
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />

      <button onClick={getWeather}>Check Weather</button>

      {weather && weather.weather && (
        <div>
          <h2>{weather.name}</h2>
          <p>{weather.weather[0].description}</p>
          <p>{weather.main.temp} °C</p>
        </div>
      )}
    </div>
  );
}

export default Weather;