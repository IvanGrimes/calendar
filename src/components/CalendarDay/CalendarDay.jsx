import React from 'react';
import PropTypes from 'prop-types';
import css from './CalendarDay.module.css';

const CalendarDay = ({
  isSameMonth,
  isSameDay,
  handleDayClick,
  formattedDate,
}) => (
  <button
    type="button"
    className={`${css.day} ${isSameMonth ? '' : css.disabled} ${isSameDay ? css.selected : ''}`}
    onClick={handleDayClick}
  >
    <span>{formattedDate}</span>
  </button>
);

CalendarDay.propTypes = {
  isSameMonth: PropTypes.bool.isRequired,
  isSameDay: PropTypes.bool.isRequired,
  handleDayClick: PropTypes.func.isRequired,
  formattedDate: PropTypes.string.isRequired,
};

export default CalendarDay;
