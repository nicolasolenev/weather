import { getDataUrl } from '../api';
import {
  SET_SELECTED_CITY,
  ADD_FAVORITE_CITY,
  DELETE_FAVORITE_CITY,
  REQUEST_WEATHER_DATA,
  RECEIVE_WEATHER_DATA,
  REQUEST_WEATHER_FORECAST_DATA,
  RECEIVE_WEATHER_FORECAST_DATA,
  WEATHER,
  FORECAST,
} from './types';

function setSelectedCity(city) {
  return {
    type: SET_SELECTED_CITY,
    city,
  };
}

function addFavoriteCity(city) {
  return {
    type: ADD_FAVORITE_CITY,
    city,
  };
}

function deleteFavoriteCity(city) {
  return {
    type: DELETE_FAVORITE_CITY,
    city,
  };
}

function requestWeatherData() {
  return {
    type: REQUEST_WEATHER_DATA,
  };
}

function receiveWeatherData(json) {
  return {
    type: RECEIVE_WEATHER_DATA,
    json,
  };
}

function fetchWeatherData(city) {
  return function (dispatch) {
    const url = getDataUrl(WEATHER, city);

    return fetch(url)
      .then((response) => response.json())
      .then((json) => {
        if (json.cod >= '400') {
          alert(json.message);
        } else {
          dispatch(receiveWeatherData(json));
        }
      });
  };
}

function requestWeatherForecastData() {
  return {
    type: REQUEST_WEATHER_FORECAST_DATA,
  };
}

function receiveWeatherForecastData(json) {
  return {
    type: RECEIVE_WEATHER_FORECAST_DATA,
    json,
  };
}

function fetchWeatherForecastData(city) {
  return function (dispatch) {
    const url = getDataUrl(FORECAST, city);

    return fetch(url)
      .then((response) => response.json())
      .then((json) => {
        if (json.cod >= '400') {
          alert(json.message);
        } else {
          setTimeout(() => dispatch(receiveWeatherForecastData(json)), 200);
        }
      });
  };
}

export {
  setSelectedCity,
  addFavoriteCity,
  deleteFavoriteCity,
  requestWeatherData,
  fetchWeatherData,
  requestWeatherForecastData,
  fetchWeatherForecastData,
};
