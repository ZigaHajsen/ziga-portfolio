import React, { Fragment } from 'react';
import {
  Background,
  VerticalText,
  Container,
  Location,
  Form,
} from '../components';

const ContactPage: React.FC = () => {
  return (
    <Fragment>
      <VerticalText>Contact Me</VerticalText>
      <Background background={'contact'}>
        <Container>
          <Location />
          <Form />
        </Container>
      </Background>
    </Fragment>
  );
};

export default ContactPage;
