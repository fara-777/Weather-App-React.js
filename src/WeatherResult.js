import React from "react";
import "./weather.css";

function WeatherResult({ date, mintemp, maxtemp, condition, icon }) {
  return (
    <div className="card">
      <h4>{date}</h4>

      <ul>
        <li>
          <img src={icon} alt="" />
        </li>
        <li>{condition}</li>
        <li>
          {mintemp} C / {maxtemp}C
        </li>
      </ul>
    </div>
  );
}

export default WeatherResult;
