import React from 'react';
import './scss/app.scss';
import Prompt from './components/Prompt';
import Top from './components/top';
import Middle from './components/middle';
import Bottom from './components/bottom';
const App = () => {
  return (
    <React.Fragment>
      <Prompt />
      <Top />
      <Middle />
      <Bottom />
    </React.Fragment>
  );
};

export default App;
