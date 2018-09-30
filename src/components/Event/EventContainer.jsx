import { Component, createElement } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { deleteEvent } from '../../actions/events';
import Event from './Event';

const mapDispatchToState = dispatch => ({
  handleDeleteEvent: id => dispatch(deleteEvent(id)),
});

class EventContainer extends Component {
  static propTypes = {};

  render() {
    const { event, handleDeleteEvent } = this.props;

    return (
      createElement(
        Event,
        {
          event,
          handleDeleteEvent,
        },
      )
    );
  }
}

export default connect(null, mapDispatchToState)(EventContainer);
