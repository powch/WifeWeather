import React from 'react';
import styled from 'styled-components';

const IconContainer = styled.div({
  margin: '.25rem'
});

const Icon = ({ item, type, temp }) => {
  const getIconPath = () => {
    switch (type) {
      case 'torso':
        return require(`../../../../../../assets/Icons/torso/${temp}/${item}`);

      case 'legs':
        return require(`../../../../../../assets/Icons/legs/${temp}/${item}`);

      case 'feet':
        return require(`../../../../../../assets/Icons/feet/${temp}/${item}`);

      case 'other':
        return require(`../../../../../../assets/Icons/other/${temp}/${item}`);
    
      default:
        break;
    }
  };

  return(
    <IconContainer>
      <img src={getIconPath()} alt="Clothing Icon" width="100rem" />
    </IconContainer>
  )
};

export default Icon;