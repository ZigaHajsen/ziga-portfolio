import React from 'react';
import styled from 'styled-components/macro';

const Card: React.FC = () => {
  return (
    <Container>
      <Group>
        <Title>Languages</Title>
        <Text>HTML5</Text>
        <Text>HTML5</Text>
        <Text>HTML5</Text>
        <Text>HTML5</Text>
      </Group>
      <Group>
        <Title>Languages</Title>
        <Text>HTML5</Text>
        <Text>HTML5</Text>
        <Text>HTML5</Text>
        <Text>HTML5</Text>
      </Group>
      <Group>
        <Title>Languages</Title>
        <Text>HTML5</Text>
        <Text>HTML5</Text>
        <Text>HTML5</Text>
        <Text>HTML5</Text>
      </Group>
      <Group>
        <Title>Languages</Title>
        <Text>HTML5</Text>
        <Text>HTML5</Text>
        <Text>HTML5</Text>
        <Text>HTML5</Text>
      </Group>
    </Container>
  );
};

export default Card;

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  max-width: 1100px;
  margin: 30vh 100px;
`;

const Group = styled.div`
  display: flex;
  flex-direction: column;
`;

const Title = styled.h2`
  font-size: 30px;
  color: green;
`;

const Text = styled.p`
  font-size: 20px;
`;
