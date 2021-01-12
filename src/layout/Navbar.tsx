import React from 'react';
import styled from 'styled-components/macro';

const Navbar: React.FC = () => {
  return (
    <Container>
      <Logo>ŽIGA HAJŠEN</Logo>
    </Container>
  );
};

export default Navbar;

const Container = styled.div`
  position: absolute;
  z-index: 1;
  width: 100vw;
  height: 10%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled.h1`
  margin-left: 50px;
`;
