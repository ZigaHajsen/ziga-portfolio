import React from 'react';
import styled from 'styled-components/macro';
import { skills } from '../data/skills';
import { ColoredText } from '../components';

const Card: React.FC = () => {
  return (
    <Container>
      {skills.map((group) => {
        const { id, title } = group;
        return (
          <Group key={id}>
            <Title>
              <ColoredText>{title}</ColoredText>
            </Title>
            {group.skills.map((skill) => {
              const { id, name } = skill;

              return <Text key={id}>{name}</Text>;
            })}
          </Group>
        );
      })}
    </Container>
  );
};

export default Card;

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
`;

const Group = styled.div`
  display: flex;
  flex-direction: column;
  width: 200px;
  margin: 25px 75px;
`;

const Title = styled.h2`
  font-size: 2rem;
  margin-bottom: 2rem;
`;

const Text = styled.p`
  font-size: 1.5rem;
  margin-bottom: 1.5rem;
`;
