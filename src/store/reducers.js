import { combineReducers } from 'redux';

import {
  SET_SELECTED_CITY,
  ADD_FAVORITE_CITY,
  DELETE_FAVORITE_CITY,
  REQUEST_WEATHER_DATA,
  RECEIVE_WEATHER_DATA,
  REQUEST_WEATHER_FORECAST_DATA,
  RECEIVE_WEATHER_FORECAST_DATA,
} from './types';

function selectedCity(state = 'Moscow', action) {
  switch (action.type) {
    case SET_SELECTED_CITY:
      return action.city;
    default:
      return state;
  }
}

function favoriteCities(state = [], action) {
  switch (action.type) {
    case ADD_FAVORITE_CITY:
      return [...state, action.city];

    case DELETE_FAVORITE_CITY:
      return [...state].filter((city) => city !== action.city);

    default:
      return state;
  }
}

function selectedCityData(
  state = {
    isFetching: false,
    data: {},
  },
  action
) {
  switch (action.type) {
    case REQUEST_WEATHER_DATA:
      return { ...state, isFetching: true };

    case RECEIVE_WEATHER_DATA:
      const data = action.json;
      return {
        isFetching: false,
        data: {
          name: data.name,
          temperature: Math.round(data.main.temp),
          icon: data.weather[0].icon,
          feelsLike: Math.round(data.main.feels_like),
          weather: data.weather[0].main,
          sunrise: data.sys.sunrise,
          sunset: data.sys.sunset,
        },
      };

    default:
      return state;
  }
}

function selectedCityForecastData(
  state = {
    isFetching: false,
    data: {},
  },
  action
) {
  switch (action.type) {
    case REQUEST_WEATHER_FORECAST_DATA:
      return { ...state, isFetching: true };

    case RECEIVE_WEATHER_FORECAST_DATA:
      const data = action.json;
      return {
        isFetching: false,
        data: {
          name: data.city.name,
          list: data.list,
        },
      };

    default:
      return state;
  }
}

export const rootReducer = combineReducers({
  selectedCity,
  favoriteCities,
  selectedCityData,
  selectedCityForecastData,
});
