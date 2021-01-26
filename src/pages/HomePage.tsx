import React from 'react';
import { Background, Container, Title } from '../components';

const HomePage: React.FC = () => {
  return (
    <Background background={'home'}>
      <Container>
        <Title />
      </Container>
    </Background>
  );
};

export default HomePage;
