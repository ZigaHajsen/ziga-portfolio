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
  width: 100%;
  margin: 0 100px;
`;

const Group = styled.div`
  display: flex;
  flex-direction: column;
`;

const Title = styled.h2`
  font-size: 30px;
  color: ${(props) => props.theme.colors.primary};
`;

const Text = styled.p`
  font-size: 20px;
`;
