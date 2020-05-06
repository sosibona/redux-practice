import { SHOW_WEATHER, WHEATHER_DATA_RECIEVED } from "./weather.actions";


const initialState = {
  isWeatherData: false,
  weatherData: null,
}

export const weatherReducer = (state = initialState, action) => {
  switch (action.type) {
    case SHOW_WEATHER: {
      return {
        ...state,
        isWeatherData
      }
    }
    case WHEATHER_DATA_RECIEVED: {
      return {
        ...state,
        weatherData: action.payload.weatherData
      }
    }
    default: 
    return state;
  }
}