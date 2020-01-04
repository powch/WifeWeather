import React from 'react';

import InfoCluster from '../../components/InfoCluster';

const Weather = ({ weather }) => {
  console.log(weather);
  return (
    <InfoCluster
      icon={weather.icon}
      currentTemp={weather.currentTemp}
      description={weather.conditionDescription}
    />
  );
};

export default Weather;
