import React from 'react';
import styled from 'styled-components/macro';
import { skills } from '../data/skills';

const Card: React.FC = () => {
  return (
    <Container>
      {skills.map((group) => {
        const { id, title } = group;
        return (
          <Group key={id}>
            <Title>{title}</Title>
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
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  flex-wrap: wrap;
`;

const Group = styled.div`
  display: flex;
  flex-direction: column;
  width: 200px;
  margin: 0 100px;
`;

const Title = styled.h2`
  color: ${(props) => props.theme.colors.primary};
  font-size: 2rem;
  margin-bottom: 2rem;
`;

const Text = styled.p`
  font-size: 1.5rem;
  margin-bottom: 1.5rem;
`;
