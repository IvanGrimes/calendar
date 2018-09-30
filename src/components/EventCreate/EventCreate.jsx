import PropTypes from 'prop-types';
import React from 'react';

const EventCreate = ({
  handleCreateEvent,
  title,
  time,
  description,
  handleChange,
  isFormValid
}) => (
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
      type="submit"
      disabled={!isFormValid}
      onClick={handleCreateEvent}
    >
      Create
    </button>
  </form>
);

EventCreate.propTypes = {
  handleCreateEvent: PropTypes.func.isRequired,
};

export default EventCreate;
