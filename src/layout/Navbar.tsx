import React from 'react';
import styled from 'styled-components/macro';
import Resume from '../files/ŽigaHajšenResume.pdf';

const Navbar: React.FC = () => {
  return (
    <Container>
      <Logo>ŽIGA HAJŠEN</Logo>
      <Download href={Resume} download='ŽigaHajšenResume.pdf'>
        Resume
      </Download>
    </Container>
  );
};

export default Navbar;

const Container = styled.div`
  position: absolute;
  z-index: 1;
  width: 100vw;
  height: 100px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  color: ${(props) => props.theme.colors.light};
`;

const Logo = styled.h1`
  margin-left: 50px;
`;

const Download = styled.a`
  margin-right: 50px;
  font-size: 1.5rem;
  text-decoration: none;
  color: ${(props) => props.theme.colors.light};

  &:hover {
    color: ${(props) => props.theme.colors.primary};
  }
`;
