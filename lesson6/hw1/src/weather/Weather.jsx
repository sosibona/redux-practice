import React, { Component } from "react";
import { connect } from "react-redux";
import { getWeatherData } from "./weather.actions";
import { weatherDataSelector } from "./weather.selector";

class Weather extends Component {
  componentDidMount() {
    this.props.getWeatherData();
  }
  render() {
    const {weatherData} = this.props;
    if (!weatherData) return null;
    const cityList = weatherData.map((weatherCity) => (
      <li key={weatherCity.id} className="city">
        <span className="city__name">{weatherCity.name}</span>
        <span className="city__temperature">
          {weatherCity.temperature} F
        </span>
      </li>
    ))
    return (
      <main className="weather">
        <h1 className="weather__title">Weather data</h1>
        <ul className="cities-list">
          {cityList}
        </ul>
      </main>
    );
  }
}

const mapState = (state) => {
  return { weatherData: weatherDataSelector(state) };
};

const mapDispatch = {
  getWeatherData: getWeatherData,
};

export default connect(mapState, mapDispatch)(Weather);
