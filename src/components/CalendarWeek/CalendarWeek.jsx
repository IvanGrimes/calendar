import React from 'react';
import PropTypes from 'prop-types';
import CalendarDay from '../CalendarDay';
import css from './CalendarWeek.module.css';

const CalendarWeek = ({ days }) => (
  <div className={css.week}>
    {days.map(day => (
      <CalendarDay
        key={day}
        day={day}
      />
    ))}
  </div>
);

CalendarWeek.propTypes = {
  days: PropTypes.arrayOf(PropTypes.instanceOf(Date)).isRequired,
};

export default CalendarWeek;
