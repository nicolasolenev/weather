import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import './App.scss';
import { Search } from '../components/search';
import { Info } from '../components/info';
import { Locations } from '../components/locations';
import {
  requestWeatherData,
  fetchWeatherData,
  requestWeatherForecastData,
  fetchWeatherForecastData,
} from '../store/actions';

export function App() {
  const dispatch = useDispatch();
  const city = useSelector((state) => state.selectedCity);

  useEffect(() => {
    dispatch(requestWeatherData());
    dispatch(fetchWeatherData(city));
    dispatch(requestWeatherForecastData());
    dispatch(fetchWeatherForecastData(city));
  }, []);

  return (
    <div className="container">
      <div className="weather">
        <Search />
        <div className="weather__container">
          <Info />
          <Locations />
        </div>
      </div>
    </div>
  );
}
