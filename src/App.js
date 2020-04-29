import React from "react";
import SearchBar from "./components/SearchBar";
import WeatherDisplay from "./components/WeatherDisplay";
import "./css/App.css";
import axios from "axios";

class App extends React.Component {
  state = {
    temp: 0,
    sky: "",
    max: 0,
    min: 0,
    humidity: 0,
    wind: 0
  };
  OnSearchSubmit = async text => {
    const response = await axios.get(
      "https://api.openweathermap.org/data/2.5/weather",
      {
        params: {
          q: text,
          appid: "12564bf9024ef5e71730c4059211327d",
          units: "imperial"
        }
      }
    );
    this.setState({
      temp: response.data.main.temp,
      sky: response.data.weather[0].main,
      max: response.data.main.temp_max,
      min: response.data.main.temp_min,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed
    });
  };

  render() {
    return (
      <div className='container card mt-4'>
        <SearchBar OnSearchSubmit={this.OnSearchSubmit} />
        <WeatherDisplay
          temp={this.state.temp}
          sky={this.state.sky}
          max={this.state.max}
          min={this.state.min}
          humidity={this.state.humidity}
          wind={this.state.wind}
        />
      </div>
    );
  }
}

export default App;
