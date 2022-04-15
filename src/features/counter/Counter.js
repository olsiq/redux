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
} from './counterSlice';
import { Button } from './Button';
import styles from './Counter.module.css';

export function Counter() {
  const count = useSelector(selectCount);

  const [inputValue, setInputValue] = useState(2);

  const incrementValue = Number(inputValue) || 0;

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
        <Button
          action={incrementByAmount(incrementValue)}
          text={'Add Amount'}
        />
        <Button
          async={true}
          action={incrementAsync(incrementValue)}
          text={' Add Async'}
        />

        <Button action={incrementIfOdd(incrementValue)} text={'Add If Odd '} />
      </div>
      <div className={styles.row}>
        <Button action={square(incrementValue)} text={'Square'} />
        <Button
          async={true}
          action={powerOf(incrementValue)}
          text={'power of '}
        />
        <Button action={showAlert(incrementValue)} text={'Show binary'} />
      </div>
      <div className={styles.row}>
        <Button
          //? we need to decrement here
          action={decrementByAmount(incrementValue)}
          text={' Decrement Amount'}
        />
        <Button
          // ?we need to fetch some data we the id of the count on an random API
          async={true}
          action={fetchData(incrementValue)}
          text={`Fetch Id ${count}`}
        />
        <Button action={incrementIfEven(incrementValue)} text={'Add If Even'} />
      </div>
    </div>
  );
}
