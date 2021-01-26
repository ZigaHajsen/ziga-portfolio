import React from 'react';
import styled from 'styled-components/macro';
import { ColoredText } from '../components';

const Title: React.FC = () => {
  return (
    <Container>
      <Text>
        Hey, I'm <ColoredText>Žiga</ColoredText>
      </Text>
      <SubText>
        Ex professional gamer turned
        <br />
        <ColoredText>software developer</ColoredText>
      </SubText>
    </Container>
  );
};

export default Title;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Text = styled.h1`
  font-size: 6rem;
  margin-bottom: 6rem;
`;

export const SubText = styled.h2`
  font-size: 3rem;
`;
