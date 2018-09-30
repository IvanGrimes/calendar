import dateFns from 'date-fns';
import React from 'react';
import PropTypes from 'prop-types';
import css from './CalendarWeekday.module.css';

const CalendarWeekday = ({ currentMonth, index }) => {
  const dateFormat = 'dddd';
  const startDate = dateFns.startOfWeek(currentMonth);

  return (
    <div className={css.item}>
      {dateFns.format(dateFns.addDays(startDate, index), dateFormat)}
    </div>
  );
};

CalendarWeekday.propTypes = {
  currentMonth: PropTypes.instanceOf(Date).isRequired,
  index: PropTypes.number.isRequired,
};

export default CalendarWeekday;
