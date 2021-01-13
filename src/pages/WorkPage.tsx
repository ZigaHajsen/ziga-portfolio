import React, { Fragment } from 'react';
import { Background, VerticalText } from '../components';

const WorkPage: React.FC = () => {
  return (
    <Fragment>
      <VerticalText>My Work</VerticalText>
      <Background background={'work'}></Background>
    </Fragment>
  );
};

export default WorkPage;
