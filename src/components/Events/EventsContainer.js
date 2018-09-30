import { Component, createElement } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getSelectedDate, sortEventsByDate } from '../../selectors';
import Events from './Events';

const mapStateToProps = state => ({
  events: sortEventsByDate(state),
  selectedDate: getSelectedDate(state),
});

const mapDispatchToProps = dispatch => ({

});

class EventsContainer extends Component {
  static propTypes = {
    events: PropTypes.arrayOf(PropTypes.shape({
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      date: PropTypes.instanceOf(Date).isRequired,
    })).isRequired,
  };

  render() {
    const { selectedDate, events } = this.props;

    return (
      createElement(
        Events,
        {
          selectedDate,
          events,
        },
      )
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(EventsContainer);
