import React, { Component } from 'react';
import PropTypes from 'prop-types';

class EventCreate extends Component {
  static propTypes = {
    handleCreateEvent: PropTypes.func.isRequired,
  };

  state = {
    title: '',
    time: '',
    description: '',
  };

  handleChange = (ev) => {
    this.setState({
      [ev.target.id]: ev.target.value,
    });
  };

  render() {
    const { title, time, description } = this.state;
    const { handleCreateEvent } = this.props;

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
          type="submit"
          disabled={!title || !time || !description}
          onClick={ev => handleCreateEvent(ev, { title, time, description })}
        >
          Create
        </button>
      </form>
    );
  }
}

export default EventCreate;
