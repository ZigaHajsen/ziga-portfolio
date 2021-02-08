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
  padding: 50px;
  max-width: 1200px;

  @media ${({ theme }) => theme.mediaQueries['tablet']} {
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr;
  }

  @media ${({ theme }) => theme.mediaQueries['phone']} {
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr;
  }
`;

const Group = styled.div`
  display: flex;
  flex-direction: column;
  margin: 25px 75px;

  @media ${({ theme }) => theme.mediaQueries['tablet']} {
    margin: 40px 40px;
  }

  @media ${({ theme }) => theme.mediaQueries['phone']} {
    margin: 30px 30px;
  }
`;

const Title = styled.h2`
  font-size: 2rem;
  margin-bottom: 2rem;

  @media ${({ theme }) => theme.mediaQueries['phone']} {
    font-size: 1.2rem;
    margin-bottom: 1rem;
  }
`;

const Text = styled.p`
  font-size: 1.5rem;
  margin-bottom: 1.5rem;

  @media ${({ theme }) => theme.mediaQueries['phone']} {
    font-size: 0.85rem;
    margin-bottom: 0.75rem;
  }
`;
