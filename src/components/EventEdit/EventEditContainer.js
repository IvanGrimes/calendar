import dateFns from "date-fns";
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

  state = {
    title: '',
    time: '',
    description: '',
  };

  get isFormValid() {
    const { title, time, description } = this.state;

    return title && time && description;
  }

  componentDidMount() {
    const { editingEvent } = this.props;

    this.setState({
      title: editingEvent.title,
      time: dateFns.format(editingEvent.date, 'HH:mm'),
      description: editingEvent.description,
    });
  }

  handleChange = (ev) => {
    this.setState({
      [ev.target.id]: ev.target.value,
    });
  };

  handleFinishEdit = (ev) => {
    const { title, time, description } = this.state;
    const { handleFinishEdit, editingEvent } = this.props;
    ev.preventDefault();

    handleFinishEdit({
      title,
      description,
      date: setTimeFromTimeStringToDate(time, editingEvent.date),
      id: editingEvent.id,
    });
  };

  render() {
    const { title, time, description } = this.state;
    const { editingEvent, handleCancelEdit } = this.props;

    return (
      createElement(
        EventEdit,
        {
          title,
          time,
          description,
          editingEvent,
          handleCancelEdit,
          handleFinishEdit: this.handleFinishEdit,
          isFormValid: this.isFormValid,
          handleChange: this.handleChange,
        },
      )
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(EventEditContainer);
