import dateFns from 'date-fns';
import { createElement } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { selectDate } from '../../actions/calendar';
import {
  getCurrentMonth,
  getSelectedDate,
} from '../../selectors/index';
import CalendarDay from './CalendarDay';

const mapStateToProps = state => ({
  currentMonth: getCurrentMonth(state),
  selectedDate: getSelectedDate(state),
});

const mapDispatchToProps = dispatch => ({
  handleSelectDate: date => dispatch(selectDate(date)),
});

const CalendarDayContainer = ({
  day,
  currentMonth,
  selectedDate,
  handleSelectDate,
}) => {
  const dateFormat = 'D';
  const formattedDate = dateFns.format(day, dateFormat);
  const monthStart = dateFns.startOfMonth(currentMonth);
  const isSameMonth = dateFns.isSameMonth(day, monthStart);
  const isSameDay = dateFns.isSameDay(day, selectedDate);

  return (
    createElement(
      CalendarDay, {
        day,
        isSameMonth,
        isSameDay,
        formattedDate,
        handleDayClick: () => handleSelectDate(dateFns.parse(day)),
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
