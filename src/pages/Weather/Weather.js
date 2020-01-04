import React from 'react';

import Header from './components/Header';
import ClothingSection from './components/ClothingSection';
import { preferences } from '../../utils/preferences';
import { TEMP_HIGH, TEMP_LOW } from '../../constants/temp-types';

const Weather = ({ weather }) => {
  const { currentTemp } = weather;

  const clothing =
    currentTemp >= TEMP_HIGH
      ? preferences.map(preference => {
          return {
            type: preference.type,
            clothing: preference.hot,
            temp: 'hot'
          };
        })
      : currentTemp <= TEMP_LOW
      ? preferences.map(preference => {
          return {
            type: preference.type,
            clothing: preference.cold,
            temp: 'cold'
          };
        })
      : preferences.map(preference => {
          return {
            type: preference.type,
            clothing: preference.mild,
            temp: 'mild'
          };
        });

  return (
    <React.Fragment>
      <Header weather={weather} />
      {clothing.map(item =>
        item.clothing.length ? (
          <ClothingSection
            type={item.type}
            clothing={item.clothing}
            temp={item.temp}
          />
        ) : null
      )}
    </React.Fragment>
  );
};

export default Weather;
