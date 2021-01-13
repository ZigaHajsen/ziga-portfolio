import React, { Fragment } from 'react';
import { Background, VerticalText } from '../components';

const ContactPage: React.FC = () => {
  return (
    <Fragment>
      <VerticalText>Contact Me</VerticalText>
      <Background background={'contact'}></Background>
    </Fragment>
  );
};

export default ContactPage;
