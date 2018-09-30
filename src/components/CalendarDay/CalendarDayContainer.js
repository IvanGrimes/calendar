import dateFns from 'date-fns';
import { createElement } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { selectDate } from '../../actions/calendar';
import {
  getCurrentMonth,
  getSelectedDate,
  getQuantityOfEventsByDate,
} from '../../selectors/index';
import CalendarDay from './CalendarDay';

const mapStateToProps = (state, props) => ({
  currentMonth: getCurrentMonth(state),
  selectedDate: getSelectedDate(state),
  hasEvent: getQuantityOfEventsByDate(state, props),
});

const mapDispatchToProps = dispatch => ({
  handleSelectDate: date => dispatch(selectDate(date)),
});

const CalendarDayContainer = ({
  date,
  currentMonth,
  selectedDate,
  handleSelectDate,
  hasEvent,
}) => {
  const monthStart = dateFns.startOfMonth(currentMonth);
  const isSameMonth = dateFns.isSameMonth(date, monthStart);
  const isSameDay = dateFns.isSameDay(date, selectedDate);

  return (
    createElement(
      CalendarDay, {
        isSameMonth,
        isSameDay,
        handleSelectDate,
        hasEvent,
        day: dateFns.format(date, 'D'),
        handleDayClick: () => handleSelectDate(dateFns.parse(date)),
      },
    )
  );
};

CalendarDayContainer.propTypes = {
  currentMonth: PropTypes.instanceOf(Date).isRequired,
  selectedDate: PropTypes.instanceOf(Date).isRequired,
  handleSelectDate: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(CalendarDayContainer);
