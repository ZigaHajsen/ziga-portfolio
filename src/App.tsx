import React, { Fragment } from 'react';
import { Navbar, ReactFullpageContainer, Footer } from './layout';

const App: React.FC = () => {
  return (
    <Fragment>
      <Navbar />
      <ReactFullpageContainer />
      <Footer />
    </Fragment>
  );
};

export default App;
