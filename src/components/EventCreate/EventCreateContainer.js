import { Component, createElement } from 'react';
import dateFns from 'date-fns';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createEvent } from '../../actions/events';
import { getSelectedDate } from '../../selectors';
import EventCreate from './EventCreate';
import uuid from 'uuid/v4';

const mapStateToProps = state => ({
  selectedDate: getSelectedDate(state),
});

const mapDispatchToProps = dispatch => ({
  handleCreateEvent: event => dispatch(createEvent(event)),
});

class EventCreateContainer extends Component {
  static propTypes = {};

  handleCreateEvent = (ev, event) => {
    ev.preventDefault();
    const { handleCreateEvent } = this.props;

    handleCreateEvent({
      ...event,
      date: this.addTimeStringToSelectedDate(event.time),
      id: uuid(),
    });
  };

  addTimeStringToSelectedDate(time) {
    const [hours, minutes] = time.split(':');
    const date = new Date();

    date.setHours(hours);
    date.setMinutes(minutes);

    return date;
  }

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
