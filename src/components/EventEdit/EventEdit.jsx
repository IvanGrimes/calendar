import React, { Component } from 'react';
import PropTypes from 'prop-types';
import dateFns from 'date-fns';

class EventEdit extends Component {
  static propTypes = {};

  render() {
    const { handleCancelEdit, handleFinishEdit, title, time, description, handleChange, isFormValid } = this.props;

    return (
      <form>
        <input
          id="title"
          type="text"
          placeholder="title"
          value={title}
          onChange={handleChange}
        />
        <input
          id="time"
          type="time"
          placeholder="time"
          value={time}
          onChange={handleChange}
        />
        <textarea
          id="description"
          placeholder="description"
          value={description}
          onChange={handleChange}
        ></textarea>
        <button
          type="button"
          onClick={handleCancelEdit}
        >
          Cancel
        </button>
        <button
          type="submit"
          disabled={!isFormValid}
          onClick={handleFinishEdit}
        >
          Done
        </button>
      </form>
    );
  }
}

export default EventEdit;
