import React, { useState } from 'react';
import { useSelector } from 'react-redux';

import './info.scss';
import { WeatherNow } from '../weatherNow';
import { WeatherDetails } from '../weatherDetails';
import { WeatherForecast } from '../weatherForecast';
import { Button } from './button';
import { Loader } from '../loader';

const tabs = {
  now: 'Now',
  details: 'Details',
  forecast: 'Forecast',
};

export function Info() {
  const [tab, setTab] = useState(tabs.now);

  const state = useSelector((state) => state);
  console.log(state);

  const isLoaderActive =
    state.selectedCityData.isFetching ||
    state.selectedCityForecastData.isFetching;

  let open;

  switch (tab) {
    case tabs.details:
      open = <WeatherDetails />;
      break;

    case tabs.forecast:
      open = <WeatherForecast />;
      break;

    default:
      open = <WeatherNow />;
  }

  const clickHandler = (e) => {
    setTab(e.target.innerText);
  };

  return (
    <div className="info">
      <div className="info__content">
        {isLoaderActive && <Loader />}
        {open}
      </div>

      <div className="info__tabs">
        <ul className="info__ul">
          <li className="info__li">
            <Button clickHandler={clickHandler} tabName={tabs.now} tab={tab} />
          </li>

          <li className="info__li">
            <Button
              clickHandler={clickHandler}
              tabName={tabs.details}
              tab={tab}
            />
          </li>

          <li className="info__li">
            <Button
              clickHandler={clickHandler}
              tabName={tabs.forecast}
              tab={tab}
            />
          </li>
        </ul>
      </div>
    </div>
  );
}
