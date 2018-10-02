import React from 'react';
import PropTypes from 'prop-types';
import CalendarDayContainer from '../CalendarDay/CalendarDayContainer';
import Row from '../Row/Row';
import css from './CalendarWeek.module.css';

const CalendarWeek = ({ days }) => (
  <Row className={css.week}>
    {days.map(day => (
      <CalendarDayContainer
        key={day}
        date={day}
      />
    ))}
  </Row>
);

CalendarWeek.propTypes = {
  days: PropTypes.arrayOf(PropTypes.instanceOf(Date)).isRequired,
};

export default CalendarWeek;
