import dateFns from 'date-fns';
import React from 'react';
import PropTypes from 'prop-types';
import CalendarWeek from '../CalendarWeek/CalendarWeek';
import css from './CalendarMonth.module.css';

const CalendarMonth = ({ currentMonth }) => {
  const monthStart = dateFns.startOfMonth(currentMonth);
  const monthEnd = dateFns.endOfMonth(monthStart);
  const startDate = dateFns.startOfWeek(monthStart);
  const endDate = dateFns.endOfWeek(monthEnd);
  const weeks = [];
  let day = startDate;
  let days;

  while (day <= endDate) {
    days = [];
    for (let i = 0; i < 7; i += 1) {
      days.push(day);

      day = dateFns.addDays(day, 1);
    }

    weeks.push(
      <CalendarWeek
        key={days}
        days={days}
      />,
    );
  }

  return (
    <div className={css.month}>
      {weeks}
    </div>
  );
};

CalendarMonth.propTypes = {
  currentMonth: PropTypes.instanceOf(Date).isRequired,
};

export default CalendarMonth;
