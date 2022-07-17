import React, { useState } from 'react';

import './info.scss';
import { WeatherNow } from '../weatherNow';
import { WeatherDetails } from '../weatherDetails';
import { WeatherForecast } from '../weatherForecast';
import { Button } from './button';

const tabs = {
  now: 'Now',
  details: 'Details',
  forecast: 'Forecast',
};

export function Info() {
  const [tab, setTab] = useState(tabs.now);

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
      <div className="info__content">{open}</div>

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
