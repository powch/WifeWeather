import React from 'react';
import styled from 'styled-components';

import Icon from './components/Icon';

const SectionContainer = styled.div({});
const IconContainer = styled.div({
  display: 'flex',
  flexDirection: 'row',
  margin: 'auto'
});

const ClothingSection = ({ type, clothing, temp }) => {
  console.log(clothing);
  return (
    <SectionContainer>
      <h3>{type}</h3>
      <IconContainer>
        {clothing.map(item => (
          <Icon item={item} type={type} temp={temp}/>
        ))}
      </IconContainer>
    </SectionContainer>
  );
};

export default ClothingSection;
