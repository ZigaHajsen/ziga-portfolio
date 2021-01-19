import React, { Fragment } from 'react';
import { Background, VerticalText, WorkCard } from '../components';

const WorkPage: React.FC = () => {
  return (
    <Fragment>
      <VerticalText>My Work</VerticalText>
      <Background background={'work'}>
        <WorkCard />
      </Background>
    </Fragment>
  );
};

export default WorkPage;
