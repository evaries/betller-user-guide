import React from 'react';
import Message from './Message/Message';
import { messages } from '../../../constants/messages';
import classes from './Messages.module.css';

const Messages = () => {
  return messages.map((message) => (
    <div key={message.id} className={classes.message}>
      <Message avatar={message.avatar} name={message.name} text={message.text} />
    </div>
  ));
};

export default Messages;
