import { Component, createElement } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { editEventCancel, editEventFinish } from '../../actions/events';
import { getEditingEvent } from '../../selectors';
import setTimeFromTimeStringToDate from '../../utils/setTimeFromTimeStringToDate';
import EventEdit from './EventEdit';

const mapStateToProps = state => ({
  editingEvent: getEditingEvent(state),
});

const mapDispatchToProps = dispatch => ({
  handleCancelEdit: () => dispatch(editEventCancel()),
  handleFinishEdit: event => dispatch(editEventFinish(event)),
});

class EventEditContainer extends Component {
  static propTypes = {};

  handleFinishEdit = (ev, event) => {
    const { handleFinishEdit, editingEvent } = this.props;
    ev.preventDefault();

    handleFinishEdit({
      ...event,
      date: setTimeFromTimeStringToDate(event.time, editingEvent.date),
      id: editingEvent.id,
    });
  };

  render() {
    const { editingEvent, handleCancelEdit } = this.props;

    return (
      createElement(
        EventEdit,
        {
          editingEvent,
          handleCancelEdit,
          handleFinishEdit: this.handleFinishEdit,
        },
      )
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(EventEditContainer);
