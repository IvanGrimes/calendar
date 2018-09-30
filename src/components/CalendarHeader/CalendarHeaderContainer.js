import { Component, createElement } from 'react';
import PropTypes from 'prop-types';
import dateFns from 'date-fns';
import { connect } from 'react-redux';
import { changeMonth } from '../../actions/calendar';
import { getCurrentMonth } from '../../selectors/index';
import CalendarHeader from './CalendarHeader';

const mapStateToProps = state => ({
  currentMonth: getCurrentMonth(state),
});

const mapDispatchToProps = dispatch => ({
  handleChangeMonth: date => dispatch(changeMonth(date)),
});

class CalendarHeaderContainer extends Component {
  static propTypes = {
    currentMonth: PropTypes.instanceOf(Date).isRequired,
    handleChangeMonth: PropTypes.func.isRequired,
  };

  handlePrevMonth = () => {
    const { handleChangeMonth, currentMonth } = this.props;

    handleChangeMonth(dateFns.subMonths(currentMonth, 1));
  };

  handleNextMonth = () => {
    const { handleChangeMonth, currentMonth } = this.props;

    handleChangeMonth(dateFns.addMonths(currentMonth, 1));
  };

  render() {
    const { currentMonth } = this.props;

    return (
      createElement(
        CalendarHeader,
        {
          handlePrevMonth: this.handlePrevMonth,
          currentMonth,
          handleNextMonth: this.handleNextMonth,
        },
      )
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CalendarHeaderContainer);
