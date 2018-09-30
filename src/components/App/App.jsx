import React  from 'react';
import CalendarContainer from '../Calendar/CalendarContainer';
import Events from '../Events';
import css from './App.module.css';

const App = () => (
  <div className={css.container}>
    <CalendarContainer />
    <Events />
  </div>
);

export default App;
