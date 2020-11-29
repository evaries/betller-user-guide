import React, { useEffect, useState } from 'react';
import ProgressBar from 'react-bootstrap/ProgressBar';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import classes from './Game.module.css';
import GuideWrapper from '../guide-wrapper/GuideWrapper';

const PERCENTS_PER_SECOND = 100 / 60;

const Game = () => {
  const [betProggress, setBetProgress] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setBetProgress((betProggress) => {
        if (betProggress >= 100) {
          return 0;
        }
        return betProggress + PERCENTS_PER_SECOND;
      });
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className={classes.container}>
      <div className={classes.title}>
        <GuideWrapper step={2}>
          <span>At 12:35, will the Bitcoin price be higher or lower than Base price?</span>
        </GuideWrapper>
        <div className={classes.betContainer}>
          <div className={classes.content}>
            <p>Game #135</p>
            <div className={classes.priceControls}>
              <Button variant='success' className={classes.rateButtons}>
                hight
              </Button>
              <GuideWrapper step={3}>
                <Form.Control className={classes.betValue} size='sm' as='input' type='number' defaultValue='0.0002' step='0.0001'></Form.Control>
              </GuideWrapper>
              <Button variant='outline-danger' className={classes.rateButtons}>
                low
              </Button>
            </div>
            <GuideWrapper step={1}>
              <img src='assets/images/time.svg' alt='time' />
              <p style={{ display: 'inline' }}>10:10 - 10:30</p>
            </GuideWrapper>
          </div>
          <ProgressBar now={betProggress} />
          <div>
            <Button className={classes.placeButton} variant='outline-warning'>
              Place Bet
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Game;
