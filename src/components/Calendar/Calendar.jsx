import PropTypes from 'prop-types';
import React from 'react';
import CalendarHeader from '../CalendarHeader';
import CalendarMonth from '../CalendarMonth/CalendarMonth';
import CalendarWeekdayList from '../CalendarWeekdayList/CalendarWeekdayList';
import css from './Calendar.module.css';

const Calendar = ({ currentMonth }) => (
  <div className={css.calendar}>
    <CalendarHeader />
    <CalendarWeekdayList
      currentMonth={currentMonth}
    />
    <CalendarMonth
      currentMonth={currentMonth}
    />
  </div>
);

Calendar.propTypes = {
  currentMonth: PropTypes.instanceOf(Date).isRequired,
};

export default Calendar;
