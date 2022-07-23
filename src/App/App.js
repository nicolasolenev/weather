import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import './App.scss';
import { Search } from '../components/search';
import { Info } from '../components/info';
import { Locations } from '../components/locations';
import { fetchWeatherData } from '../store/reducers';

export function App() {
  const dispatch = useDispatch();
  const city = useSelector((state) => state.selectedCity);

  useEffect(() => {
    const geo = navigator.geolocation;

    const successGeo = async (data) => {
      const coords = data.coords;

      dispatch(
        fetchWeatherData({
          isGeo: true,
          lon: coords.longitude,
          lat: coords.latitude,
        })
      );
    };

    const denyGeo = (err) => dispatch(fetchWeatherData({ city }));

    geo.getCurrentPosition(successGeo, denyGeo);
    // eslint-disable-next-line
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
