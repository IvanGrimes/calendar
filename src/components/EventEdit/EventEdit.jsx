import React, { Component } from 'react';
import PropTypes from 'prop-types';
import dateFns from 'date-fns';

class EventEdit extends Component {
  static propTypes = {};

  state = {
    title: '',
    time: '',
    description: '',
  };

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

  render() {
    const { title, time, description } = this.state;
    const { handleCancelEdit, handleFinishEdit } = this.props;

    return (
      <form>
        <input
          id="title"
          type="text"
          placeholder="title"
          value={title}
          onChange={ev => this.handleChange(ev)}
        />
        <input
          id="time"
          type="time"
          placeholder="time"
          value={time}
          onChange={ev => this.handleChange(ev)}
        />
        <textarea
          id="description"
          placeholder="description"
          value={description}
          onChange={ev => this.handleChange(ev)}
        ></textarea>
        <button
          type="button"
          onClick={handleCancelEdit}
        >
          Cancel
        </button>
        <button
          type="submit"
          disabled={!title || !time || !description}
          onClick={ev => handleFinishEdit(ev, { title, time, description })}
        >
          Done
        </button>
      </form>
    );
  }
}

export default EventEdit;
