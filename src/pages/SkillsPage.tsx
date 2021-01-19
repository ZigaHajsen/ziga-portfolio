import React, { Fragment } from 'react';
import { Background, SkillsCard, VerticalText } from '../components';

const SkillsPage: React.FC = () => {
  return (
    <Fragment>
      <VerticalText>My Skills</VerticalText>
      <Background background={'skills'}>
        <SkillsCard />
      </Background>
    </Fragment>
  );
};

export default SkillsPage;
