import React from 'react';
import styled from 'styled-components/macro';

const Container: React.FC = ({ children }) => {
  return <ContainerDiv>{children}</ContainerDiv>;
};

export default Container;

const ContainerDiv = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;

  @media ${({ theme }) => theme.mediaQueries['phone']} {
    grid-template-columns: 1fr;
  }
`;
