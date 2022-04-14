import React from 'react';
import { useSelector } from 'react-redux';
import { Counter } from './features/counter/Counter';
import './App.css';
import { MySvg } from './MySvg';
import { selectCount } from './features/counter/counterSlice';

function App() {
  const color = useSelector(selectCount);

  let fillColor;
  // switch (fillColor) {
  //   case color < 10:
  //     fillColor = `#00${color}AFF`;
  //     console.log(fillColor);
  //     break;

  //   case color > 9 && color <= 99:
  //     fillColor = `#0${color}AFF`;
  //     break;

  //   case color > 99 && color < 254:
  //     fillColor = `#${color}AFF`;
  //     break;
  //   case color >= 253:
  //     fillColor = `#fff`;
  //     break;

  //   default:
  //     //* in case its a nagative color
  //     console.log(color > 99 && color < 254);
  //     fillColor = `#050AFF`;
  //     break;
  // }
  if (color < 0) {
    fillColor = 'blue';
  } else if (color < 10) {
    fillColor = `rgb(255, ${color}0, ${color + 5})`;
  } else if (color > 9 && color <= 99) {
    fillColor = `rgb(155, ${color}, ${color + 5})`;
  } else if (color > 99 && color < 254) {
    fillColor = `rgb(60, ${color}, 113)`;
  } else if (color >= 254) {
    fillColor = `pink`;
  }

  return (
    <div className='App'>
      <header className='App-header'>
        <MySvg fill={fillColor} />
        <Counter />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <span>
          <span>Learn </span>
          <a
            className='App-link'
            href='https://reactjs.org/'
            target='_blank'
            rel='noopener noreferrer'>
            React
          </a>
          <span>, </span>
          <a
            className='App-link'
            href='https://redux.js.org/'
            target='_blank'
            rel='noopener noreferrer'>
            Redux
          </a>
          <span>, </span>
          <a
            className='App-link'
            href='https://redux-toolkit.js.org/'
            target='_blank'
            rel='noopener noreferrer'>
            Redux Toolkit
          </a>
          ,<span> and </span>
          <a
            className='App-link'
            href='https://react-redux.js.org/'
            target='_blank'
            rel='noopener noreferrer'>
            React Redux
          </a>
        </span>
      </header>
    </div>
  );
}

export default App;
