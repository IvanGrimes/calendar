import { Component, createElement } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { deleteEvent, editEventStart } from '../../actions/events';
import { getEditingEventId } from '../../selectors';
import Event from './Event';

const mapStateToProps = state => ({
  editingEventId: getEditingEventId(state),
});

const mapDispatchToState = dispatch => ({
  handleEditEvent: id => dispatch(editEventStart(id)),
  handleDeleteEvent: id => dispatch(deleteEvent(id)),
});

class EventContainer extends Component {
  static propTypes = {
    event: PropTypes.shape({
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      date: PropTypes.instanceOf(Date).isRequired,
    }).isRequired,
    editingEventId: PropTypes.string.isRequired,
    handleEditEvent: PropTypes.func.isRequired,
    handleDeleteEvent: PropTypes.func.isRequired,
  };

  render() {
    const { event, editingEventId, handleEditEvent, handleDeleteEvent } = this.props;

    return (
      createElement(
        Event,
        {
          event,
          editingEventId,
          handleEditEvent,
          handleDeleteEvent,
        },
      )
    );
  }
}

export default connect(mapStateToProps, mapDispatchToState)(EventContainer);
