import React from 'react';
import styled from 'styled-components';

import CityName from './components/CityName';

const CityContainer = styled.div({
  display: 'flex',
  padding: '1rem',
  margin: 'auto'
});

const CityCluster = ({ name }) => (
  <CityContainer>
    <CityName>{name}</CityName>
  </CityContainer>
);

export default CityCluster;
