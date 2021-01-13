import React, { Fragment } from 'react';
import { Background, Card, VerticalText } from '../components';

const SkillsPage: React.FC = () => {
  return (
    <Fragment>
      <VerticalText>My Skills</VerticalText>
      <Background background={'skills'}>
        <Card />
      </Background>
    </Fragment>
  );
};

export default SkillsPage;
