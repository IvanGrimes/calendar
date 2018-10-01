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

  state = {
    title: '',
    time: '',
    description: '',
  };

  get isFormValid() {
    const { title, time, description } = this.state;

    return title && time && description;
  }

  handleChange = (ev) => {
    this.setState({
      [ev.target.id]: ev.target.value,
    });
  };

  handleCreateEvent = (ev) => {
    ev.preventDefault();
    const { handleCreateEvent, selectedDate } = this.props;
    const { title, time, description } = this.state;

    handleCreateEvent({
      title,
      description,
      date: setTimeFromTimeStringToDate(time, selectedDate),
      id: uuid(),
    });

    this.setState({
      title: '',
      time: '',
      description: '',
    });
  };

  render() {
    const { title, time, description } = this.state;

    return (
      createElement(
        EventCreate,
        {
          handleCreateEvent: this.handleCreateEvent,
          handleChange: this.handleChange,
          title,
          time,
          description,
          isFormValid: this.isFormValid,
        },
      )
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(EventCreateContainer);
