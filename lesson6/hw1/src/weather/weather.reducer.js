import { SHOW_WEATHER, WHEATHER_DATA_RECIEVED } from "./weather.actions";


const initialState = {
  weatherData: null,
}

export const weatherReducer = (state = initialState, action) => {
  switch (action.type) {
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