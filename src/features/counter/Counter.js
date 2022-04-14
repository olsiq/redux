import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import {
  decrement,
  increment,
  incrementByAmount,
  incrementAsync,
  incrementIfOdd,
  selectCount,
} from './counterSlice';
import { Button } from './Button';
import styles from './Counter.module.css';

export function Counter() {
  const count = useSelector(selectCount);

  const [incrementAmount, setIncrementAmount] = useState('2');

  const incrementValue = Number(incrementAmount) || 0;

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
          value={incrementAmount}
          onChange={(e) => setIncrementAmount(e.target.value)}
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
        <Button action={incrementByAmount(incrementValue)} text={'Square'} />
        <Button
          async={true}
          action={incrementAsync(incrementValue)}
          text={'Square value'}
        />
        <Button action={incrementIfOdd(incrementValue)} text={'Show binary'} />
      </div>

      <div className={styles.row}>
        <Button
          //? we need to decrement here
          action={decrement()}
          text={' Decrement Amount'}
        />
        <Button
          // ?we need to fetch some data we the id of the count on an random API
          async={true}
          action={incrementAsync(incrementValue)}
          text={`Fetch Id ${count}`}
        />
        <Button action={incrementIfOdd(incrementValue)} text={'Add If Even'} />
      </div>
    </div>
  );
}
