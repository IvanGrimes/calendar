import React from 'react';
import PropTypes from 'prop-types';
import CalendarWeekday from '../CalendarWeekday/CalendarWeekday';
import css from './CalendarWeekdayList.module.css';

const CalendarWeekdayList = ({ currentMonth }) => {
  const days = [];
  let i;

  for (i = 0; i < 7; i += 1) {
    days.push(
      <CalendarWeekday
        key={i} // TODO: replace by uuid v4
        currentMonth={currentMonth}
        index={i}
      />,
    );
  }

  return (
    <div className={css.container}>{days}</div>
  );
};

CalendarWeekdayList.propTypes = {
  currentMonth: PropTypes.instanceOf(Date).isRequired,
};

export default CalendarWeekdayList;
