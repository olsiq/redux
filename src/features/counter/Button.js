import React from 'react';
import styles from './Counter.module.css';
import { useDispatch } from 'react-redux';

export const Button = ({ action, aria, async = false, text }) => {
  const dispatch = useDispatch();
  const value = text;
  return (
    <button
      className={async ? styles.asyncButton : styles.button}
      aria-label={aria ? aria : ''}
      onClick={() => dispatch(action)}>
      {value}
    </button>
  );
};
