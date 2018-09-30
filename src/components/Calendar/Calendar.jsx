import PropTypes from 'prop-types';
import React from 'react';
import CalendarHeaderContainer from '../CalendarHeader/CalendarHeaderContainer';
import CalendarMonth from '../CalendarMonth/CalendarMonth';
import CalendarWeekdayList from '../CalendarWeekdayList/CalendarWeekdayList';
import css from './Calendar.module.css';

const Calendar = ({ currentMonth }) => (
  <div className={css.calendar}>
    <CalendarHeaderContainer />
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
