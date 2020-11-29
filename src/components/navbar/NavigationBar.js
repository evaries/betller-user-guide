import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import { START_GUIDE } from '../../constants/actionType';
import { useDispatch } from 'react-redux';
import classes from './NavigationBar.module.css';

const NavigationBar = () => {
  const dispatch = useDispatch();

  const startGuideHandler = () => {
    dispatch({ type: START_GUIDE });
  };
  return (
    <Navbar expand='lg' variant='dark' className={classes.navBar}>
      <Navbar.Brand href='#'>
        <img src='/assets/images/logo.svg' alt='logo' />
      </Navbar.Brand>
      <img src='/assets/images/help_outline.svg' alt='help' onClick={startGuideHandler} />
    </Navbar>
  );
};
export default NavigationBar;
