import React from 'react';
import styled from 'styled-components';

import InfoCluster from '../InfoCluster';
import CityCluster from '../CityCluster';

const HeaderContainer = styled.div({
  display: 'flex',
  flexDirection: 'row'
});

const InfoContainer = styled.div({
  display: 'flex',
  flex: 1
});

const CityContainer = styled.div({
  display: 'flex',
  flex: 1
});

const Header = ({ weather }) => (
  <HeaderContainer>
    <InfoContainer>
      <InfoCluster {...weather} />
    </InfoContainer>
    <CityContainer>
      <CityCluster {...weather} />
    </CityContainer>
  </HeaderContainer>
);

export default Header;
