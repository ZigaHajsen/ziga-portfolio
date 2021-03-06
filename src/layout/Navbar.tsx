import React from 'react';
import styled from 'styled-components/macro';
import Resume from '../files/ŽigaHajšenResumeENG.pdf';

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

  @media ${({ theme }) => theme.mediaQueries['phone']} {
    height: 70px;
  }

  @media ${({ theme }) => theme.mediaQueries['phoneSmall']} {
    height: 50px;
  }
`;

const Logo = styled.h1`
  margin-left: 50px;

  @media ${({ theme }) => theme.mediaQueries['phone']} {
    font-size: 1.5rem;
    margin-left: 25px;
  }

  @media ${({ theme }) => theme.mediaQueries['phoneSmall']} {
    font-size: 1.2rem;
  }
`;

const Download = styled.a`
  margin-right: 50px;
  font-size: 1.5rem;
  text-decoration: none;
  color: ${(props) => props.theme.colors.light};

  &:hover {
    color: ${(props) => props.theme.colors.primary};
  }

  @media ${({ theme }) => theme.mediaQueries['phone']} {
    font-size: 1rem;
    margin-right: 25px;
  }
`;
