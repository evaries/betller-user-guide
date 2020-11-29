import React from 'react';
import classes from './Chat.module.css';
import Mesaages from './Messages/Messages';
import Input from './Input/Input';

const Chat = () => {
  return (
    <div className={classes.container}>
      <div className={classes.messages}>
        <Mesaages />
      </div>
      <Input />
    </div>
  );
};
export default Chat;
