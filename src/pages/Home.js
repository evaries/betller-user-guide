import React from 'react';
import NavigationBar from '../components/navbar/NavigationBar';
import Chart from '../components/chart/Chart';
import Game from '../components/game/Game';
import Chat from '../components/chat/Chat';
import GuideWrapper from '../components/guide-wrapper/GuideWrapper';
import classes from './Home.module.css';

const Home = () => {
  return (
    <>
      <NavigationBar />
      <div className={classes.container}>
        <div className={classes.content}>
          <GuideWrapper step={0}>
            <Chart />
          </GuideWrapper>
          <Game />
        </div>
        <div className={classes.chat}>
          <Chat />
        </div>
      </div>
    </>
  );
};
export default Home;
