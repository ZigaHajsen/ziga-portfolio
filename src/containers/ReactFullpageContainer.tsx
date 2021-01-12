import React from 'react';
import ReactFullpage from '@fullpage/react-fullpage';
import { HomePage, SkillsPage, WorkPage, ContactPage } from '../pages';

const ReactFullpageContainer: React.FC = () => {
  return (
    <ReactFullpage
      navigation={true}
      navigationTooltips={['Home', 'Skills', 'Work', 'Contact']}
      loopTop={true}
      loopBottom={true}
      render={({ state, fullpageAPI }: { state: any; fullpageAPI: any }) => {
        return (
          <ReactFullpage.Wrapper>
            <div className='section'>
              <HomePage />
            </div>
            <div className='section'>
              <SkillsPage />
            </div>
            <div className='section'>
              <WorkPage />
            </div>
            <div className='section'>
              <ContactPage />
            </div>
          </ReactFullpage.Wrapper>
        );
      }}
    />
  );
};

export default ReactFullpageContainer;
