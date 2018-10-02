import React from 'react';
import PropTypes from 'prop-types';
import css from './CalendarDay.module.css';

const CalendarDay = ({
  isSameMonth,
  isSameDay,
  handleDayClick,
  day,
  eventsQuantity,
}) => (
  <button
    type="button"
    className={`
      ${css.day}
      ${isSameMonth ? '' : css.disabled}
      ${isSameDay ? css.selected : ''}
      ${eventsQuantity ? css.hasEvent : ''}
    `}
    onClick={handleDayClick}
  >
    {eventsQuantity ? (
      <span className={css.eventsQuantity}>
        {`Events: ${eventsQuantity}`}
      </span>
    ) : null}
    <span className={css.cloneDate}>{day}</span>
    <span className={css.date}>{day}</span>
  </button>
);

CalendarDay.propTypes = {
  isSameMonth: PropTypes.bool.isRequired,
  isSameDay: PropTypes.bool.isRequired,
  handleDayClick: PropTypes.func.isRequired,
  day: PropTypes.string.isRequired,
  eventsQuantity: PropTypes.number.isRequired,
};

export default CalendarDay;
