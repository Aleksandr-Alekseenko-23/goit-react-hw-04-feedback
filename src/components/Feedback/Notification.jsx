import React from 'react';
import css from './Notification.module.css';

function Notification({ message }) {
  return <div className={css.notification}>{message}</div>;
}

export default Notification;
