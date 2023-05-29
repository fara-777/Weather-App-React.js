import { useState } from "react";
import "./App.css";
import Weather from "./WeatherResult";

function App() {
  const key = "26ba80924c634b59901170924232805";
  let cityInput = "";
  const [weatherData, setWeatherData] = useState([]);
  function cityText(e) {
    document.querySelector("input").addEventListener("input", (e) => {
      e.preventDefault();
      cityInput = e.target.value;
      console.log(cityInput);
    });
  }
  async function getData(value) {
    if (!value) return;
    const data =
      await fetch(`http://api.weatherapi.com/v1/forecast.json?key=${key}&q=${value}&days=1&aqi=no&alerts=no

    `);
    const result = await data.json();
    setWeatherData(result.forecast.forecastday, result.location);
    console.log(result);
  }

  return (
    <div className="container">
      <div className="search">
        <input type="text" placeholder="search a city" onChange={cityText} />
        <button onClick={() => getData(cityInput)}>Search</button>
      </div>
      {weatherData.map((item) => (
        <Weather
          key={item.date}
          date={item.date}
          mintemp={item.day.mintemp_c}
          maxtemp={item.day.maxtemp_c}
          condition={item.day.condition.text}
          icon={item.day.condition.icon}
        />
      ))}
    </div>
  );
}

export default App;
