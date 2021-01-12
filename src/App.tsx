import React, { Fragment } from 'react';
import {
  NavbarContainer,
  ReactFullpageContainer,
  FooterContainer,
} from './containers';

const App: React.FC = () => {
  return (
    <Fragment>
      <NavbarContainer />
      <ReactFullpageContainer />
      <FooterContainer />
    </Fragment>
  );
};

export default App;
