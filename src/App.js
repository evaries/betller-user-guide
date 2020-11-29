import React from 'react';
import Home from './pages/Home';
import classes from './App.module.css';
import cx from 'classnames';
import { useSelector } from 'react-redux';

const App = () => {
  const isGuideStarted = useSelector((state) => state.isGuideStarted);
  return (
    <>
      <div className={cx(classes.backdrop, isGuideStarted ? classes.active : null)}></div>
      <Home />;
    </>
  );
};

export default App;
