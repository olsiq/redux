import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import {
  decrement,
  decrementByAmount,
  increment,
  incrementByAmount,
  square,
  powerOf,
  incrementAsync,
  fetchData,
  incrementIfOdd,
  incrementIfEven,
  selectCount,
  reset,
  showAlert,
} from '../../app/';
import { Button } from './Button';
import styles from './Counter.module.css';

export function Counter() {
  const count = useSelector(selectCount);

  const [inputValue, setInputValue] = useState(2);

  const value = Number(inputValue) || 0;

  return (
    <div>
      <div className={styles.row}>
        <Button aria={'decriment value'} action={decrement()} text={'-'} />
        <span className={styles.value}>{count}</span>
        <Button action={increment()} text={'+'} />
      </div>
      <div className={styles.row}>
        <input
          className={styles.textbox}
          aria-label='Set increment amount'
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
      </div>
      <div className={styles.row}>
        <Button
          action={reset()}
          text={'reset'}
          onClick={() => {
            console.log('hello');
          }}
        />
      </div>
      <div className={styles.row}>
        <Button action={incrementByAmount(value)} text={'Add Amount'} />
        <Button
          async={true}
          action={incrementAsync(value)}
          text={' Add Async'}
        />

        <Button action={incrementIfOdd(value)} text={'Add If Odd '} />
      </div>
      <div className={styles.row}>
        <Button action={square(value)} text={'Square'} />
        <Button async={true} action={powerOf(value)} text={'power of '} />
        <Button action={showAlert(value)} text={'Show binary'} />
      </div>
      <div className={styles.row}>
        <Button
          //? decrement
          action={decrementByAmount(value)}
          text={' Decrement Amount'}
        />
        <Button
          // ? fetch some data with id the value on an random API
          async={true}
          action={fetchData(value)}
          text={`Fetch advice with Id: ${count}`}
        />
        <Button action={incrementIfEven(value)} text={'Add If Even'} />
      </div>
    </div>
  );
}
