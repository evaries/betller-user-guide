import React from 'react';
import classes from './Input.module.css';

const Input = () => {
  return (
    <form className={classes.form}>
      <input className={classes.input} type='text' placeholder='Text Message' />
      <button className={classes.sendButton}>
        <img src='/assets/images/send_icon.svg' alt='send' />
      </button>
    </form>
  );
};

export default Input;
