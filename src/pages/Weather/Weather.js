import React from 'react';

import InfoCluster from './components/InfoCluster';

const Weather = ({ weather }) => {
  return (
    <InfoCluster
      icon={weather.icon}
      currentTemp={weather.currentTemp}
      conditions={weather.currentConditions}
    />
  );
};

export default Weather;
