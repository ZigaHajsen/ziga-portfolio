import React from 'react';
import styled from 'styled-components/macro';

const Container: React.FC = ({ children }) => {
  return <ContainerDiv>{children}</ContainerDiv>;
};

export default Container;

const ContainerDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  flex-wrap: wrap;
  margin: 150px 200px;
`;
