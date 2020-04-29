import React from "react";
import "../css/WeatherDisplay.css";

const WeatherDisplay = props => {
  return (
    <div className='weather'>
      <h1>{Math.ceil(props.temp)} °F</h1>
      <p className='text-muted'>{props.sky}</p>
      <div className='card'>
        <ul>
          <li>Highest Temperature: {props.max} </li>
          <li>Lowest Temperature: {props.min} </li>
          <li>Humidity: {props.humidity} </li>
          <li>Windspeed: {props.wind} </li>
        </ul>
      </div>
    </div>
  );
};

export default WeatherDisplay;
