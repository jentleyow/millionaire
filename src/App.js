import React from 'react';
import './scss/app.scss';
import Prompt from './components/Prompt';
import Top from './components/top';
import Middle from './components/middle';
const App = () => {
  return (
    <React.Fragment>
      <Prompt />
      <Top />
      <Middle />
    </React.Fragment>
  );
};

export default App;
