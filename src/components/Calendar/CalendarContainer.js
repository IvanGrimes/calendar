import { Component, createElement } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getCurrentMonth } from '../../selectors/index';
import Calendar from './Calendar';

const mapStateToProps = state => ({
  currentMonth: getCurrentMonth(state),
});

class CalendarContainer extends Component {
  static propTypes = {
    currentMonth: PropTypes.instanceOf(Date).isRequired,
  };

  render() {
    const { currentMonth } = this.props;

    return (
      createElement(
        Calendar,
        {
          currentMonth,
        },
      )
    );
  }
}

export default connect(mapStateToProps)(CalendarContainer);
