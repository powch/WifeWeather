import React from 'react';
import styled from 'styled-components';

const IconContainer = styled.div({
  height: '7rem',
  width: '7rem'
});

const WeatherIcon = ({icon}) => (
  <IconContainer>
    <img src={icon} alt="Weather Icon" height="100%" width="100%" />
  </IconContainer>
);

export default WeatherIcon;