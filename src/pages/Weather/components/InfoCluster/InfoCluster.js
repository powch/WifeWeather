import React from 'react';
import styled from 'styled-components';

import WeatherIcon from './components/WeatherIcon';
import CurrentTemp from './components/CurrentTemp';
import CondDescription from './components/CondDescription';

const ClusterContainer = styled.div({
  display: 'flex',
  flexDirection: 'row',
  width: 'auto'
});
const IconContainer = styled.div({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center'
});

const InfoCluster = ({ icon, currentTemp, currentConditions }) => (
  <ClusterContainer>
    <WeatherIcon icon={icon} />
    <IconContainer>
      <CurrentTemp>{currentTemp}°F</CurrentTemp>
      <CondDescription>{currentConditions.toLowerCase()}</CondDescription>
    </IconContainer>
  </ClusterContainer>
);

export default InfoCluster;
