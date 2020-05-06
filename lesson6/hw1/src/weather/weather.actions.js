import fetchWeatherData from "./weather.gateway";
export const WHEATHER_DATA_RECIEVED = "WHEATHER_DATA_RECIEVED"


export const weatherDataRecieved = weatherData => {
  return {
    type: WHEATHER_DATA_RECIEVED,
    payload: {
      weatherData
    }
  }
}

export const getWeatherData = () => {
  return function (dispatch) {
    fetchWeatherData().then(weatherData => dispatch(weatherDataRecieved(weatherData)));
  }
}