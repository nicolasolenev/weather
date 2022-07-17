import React from 'react';
import { useDispatch } from 'react-redux';

import {
  requestWeatherData,
  fetchWeatherData,
  requestWeatherForecastData,
  fetchWeatherForecastData,
  setSelectedCity,
  deleteFavoriteCity,
} from '../../store/actions';

export function Location({ city }) {
  const dispatch = useDispatch();

  const cityHandler = () => {
    dispatch(setSelectedCity(city));
    dispatch(requestWeatherData());
    dispatch(fetchWeatherData(city));
    dispatch(requestWeatherForecastData());
    dispatch(fetchWeatherForecastData(city));
  };

  const deleteHandler = () => dispatch(deleteFavoriteCity(city));

  return (
    <li className="locations__li">
      <button
        className="locations__city"
        title="get weather"
        onClick={cityHandler}
      >
        {city}
      </button>

      <button
        className="locations__city_delete-button"
        title="delete city"
        onClick={deleteHandler}
      />
    </li>
  );
}
