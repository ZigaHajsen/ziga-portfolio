import React, { Fragment } from 'react';
import { Background, SkillsCard, VerticalText, Container } from '../components';

const SkillsPage: React.FC = () => {
  return (
    <Fragment>
      <VerticalText>My Skills</VerticalText>
      <Background background={'skills'}>
        <Container>
          <SkillsCard />
        </Container>
      </Background>
    </Fragment>
  );
};

export default SkillsPage;
