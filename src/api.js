export const apiKey = 'f660a2fb1e4bad108d6160b7f58c555f';

export const serverUrl = 'https://api.openweathermap.org/data/2.5/';

export const getDataUrl = (type, city) =>
  `${serverUrl}${type}?q=${city}&appid=${apiKey}&units=metric`;

export const getIconUrl = (icon) =>
  `https://openweathermap.org/img/wn/${icon}@4x.png`;

export const getForecastIconUrl = (icon) =>
  `https://openweathermap.org/img/wn/${icon}.png`;
