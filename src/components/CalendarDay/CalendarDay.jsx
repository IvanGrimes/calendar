import React from 'react';
import PropTypes from 'prop-types';
import css from './CalendarDay.module.css';

const CalendarDay = ({
  isSameMonth,
  isSameDay,
  handleDayClick,
  day,
  hasEvent,
}) => (
  <button
    type="button"
    className={`
      ${css.day}
      ${isSameMonth ? '' : css.disabled}
      ${isSameDay ? css.selected : ''}
      ${hasEvent ? css.hasEvent : ''}
    `}
    onClick={handleDayClick}
  >
    <span>{day}</span>
  </button>
);

CalendarDay.propTypes = {
  isSameMonth: PropTypes.bool.isRequired,
  isSameDay: PropTypes.bool.isRequired,
  handleDayClick: PropTypes.func.isRequired,
  day: PropTypes.string.isRequired,
  hasEvent: PropTypes.bool.isRequired,
};

export default CalendarDay;
