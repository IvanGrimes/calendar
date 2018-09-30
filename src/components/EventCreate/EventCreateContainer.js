import { Component, createElement } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import uuid from 'uuid/v4';
import { createEvent } from '../../actions/events';
import { getSelectedDate } from '../../selectors';
import EventCreate from './EventCreate';
import setTimeFromTimeStringToDate from '../../utils/setTimeFromTimeStringToDate';

const mapStateToProps = state => ({
  selectedDate: getSelectedDate(state),
});

const mapDispatchToProps = dispatch => ({
  handleCreateEvent: event => dispatch(createEvent(event)),
});

class EventCreateContainer extends Component {
  static propTypes = {
    selectedDate: PropTypes.instanceOf(Date).isRequired,
    handleCreateEvent: PropTypes.func.isRequired,
  };

  handleCreateEvent = (ev, event) => {
    ev.preventDefault();
    const { handleCreateEvent, selectedDate } = this.props;

    handleCreateEvent({
      ...event,
      date: setTimeFromTimeStringToDate(event.time, selectedDate),
      id: uuid(),
    });
  };

  render() {
    return (
      createElement(
        EventCreate,
        {
          handleCreateEvent: this.handleCreateEvent,
        },
      )
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(EventCreateContainer);
