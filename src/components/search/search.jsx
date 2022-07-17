import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import './search.scss';
import {
  setSelectedCity,
  requestWeatherData,
  fetchWeatherData,
  requestWeatherForecastData,
  fetchWeatherForecastData,
} from '../../store/actions';

export function Search() {
  const dispatch = useDispatch();
  const city = useSelector((state) => state.selectedCity);

  const formHandler = (e) => {
    e.preventDefault();
    e.target.reset();
    dispatch(requestWeatherData());
    dispatch(fetchWeatherData(city));
    dispatch(requestWeatherForecastData());
    dispatch(fetchWeatherForecastData(city));
  };

  const inputHandler = (e) => {
    dispatch(setSelectedCity(e.target.value));
  };

  return (
    <div className="search">
      <form className="search__form" onSubmit={formHandler}>
        <input
          className="search__input"
          type="text"
          placeholder="Aktobe"
          onChange={inputHandler}
        />

        <button className="search__button" title="get weather" />
      </form>
    </div>
  );
}
