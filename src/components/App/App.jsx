import React from 'react';
import CalendarContainer from '../Calendar/CalendarContainer';
import Events from '../Events';
import css from './App.module.css';

// TODO: Put reusable css classes into global.module.css
// TODO: Edit propTypes

const App = () => (
  <div className={css.container}>
    <CalendarContainer />
    <Events />
  </div>
);

export default App;

