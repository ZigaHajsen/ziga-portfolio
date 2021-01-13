import React, { Fragment } from 'react';
import styled from 'styled-components/macro';
import { skills } from '../data/skills';
import { VerticalText } from '../components';

const Card: React.FC = () => {
  return (
    <Fragment>
      <VerticalText>My Skills</VerticalText>
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
    </Fragment>
  );
};

export default Card;

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  flex-wrap: wrap;
  margin: 0 200px;
`;

const Group = styled.div`
  display: flex;
  flex-direction: column;
  width: 200px;
  margin: 25px 75px;
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
