import React from 'react';
import styled from 'styled-components';

const Container = styled.div({
  margin: '0',
  padding: '0',
  height: '100vh'
});

const PageShell = ({children}) => (
  <Container>{children}</Container>
);

export default PageShell;