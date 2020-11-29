import React from 'react';
import classes from './Message.module.css';

const Message = ({ avatar, name, text }) => {
  return (
    <div className={classes.container}>
      <div className={classes.header}>
        <div className={classes.userInfo}>
          <img src='/assets/images/avatar.svg' alt='avatar' className={classes.avatar} />
          <span>{name}</span>
        </div>
        <img src='/assets/images/like.svg' alt='like' />
      </div>
      <div className={classes.text}>
        <span>{text}</span>
      </div>
    </div>
  );
};

export default Message;
