import React from 'react';
import styled from 'styled-components/macro';

interface BackgroundProps {
  children?: JSX.Element;
  background: string;
}

const Background: React.FC<BackgroundProps> = ({ children, background }) => {
  return (
    <Container src={`../images/backgrounds/${background}.png`}>
      {children}
    </Container>
  );
};

export default Background;

const Container = styled.img`
  object-fit: cover;
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
`;
