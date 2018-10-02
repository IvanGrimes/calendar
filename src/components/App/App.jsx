import React from 'react';
import CalendarContainer from '../Calendar/CalendarContainer';
import EventsContainer from '../Events/EventsContainer';
import css from './App.module.css';

// TODO: Put reusable css classes into global.module.css

const App = () => (
  <div className={css.container}>
    <CalendarContainer />
    <EventsContainer />
  </div>
);

export default App;
