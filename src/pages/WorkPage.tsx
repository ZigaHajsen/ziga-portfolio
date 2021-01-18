import React, { Fragment } from 'react';
import { Background, VerticalText, Container, WorkCard } from '../components';

const WorkPage: React.FC = () => {
  return (
    <Fragment>
      <VerticalText>My Work</VerticalText>
      <Background background={'work'}>
        <Container>
          <WorkCard />
        </Container>
      </Background>
    </Fragment>
  );
};

export default WorkPage;
