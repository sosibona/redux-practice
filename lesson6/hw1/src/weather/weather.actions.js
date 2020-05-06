export const SHOW_WEATHER = "SHOW_WEATHER"
export const WHEATHER_DATA_RECIEVED = "WHEATHER_DATA_RECIEVED"

const baseUrl = 'https://5e5cf5eb97d2ea0014796f01.mockapi.io/api/v1/cities';

export const weatherData = () => {
  return {
    type: SHOW_WEATHER,
  }
}

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
    console.log('fetch')
    fetch(baseUrl)
      .then(response => {
        if (response.ok) {
          return response.json()
        } else {
          throw new Error('failed data');
        }
      })
      .then(weatherData => dispatch(weatherDataRecieved(weatherData)));
  }
}