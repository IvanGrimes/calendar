import PropTypes from 'prop-types';
import React from 'react';
import css from './EventCreate.module.css';

const EventCreate = ({
  handleCreateEvent,
  title,
  time,
  description,
  handleChange,
  isFormValid,
}) => (
  <form className={css.form}>
    <input
      className={css.inputTitle}
      id="title"
      type="text"
      placeholder="Event's title"
      value={title}
      onChange={handleChange}
    />
    <input
      className={css.inputTime}
      id="time"
      type="time"
      value={time}
      onChange={handleChange}
    />
    <input
      className={css.inputDescription}
      id="description"
      placeholder="Event's description"
      value={description}
      onChange={handleChange}
    />
    <button
      className={css.submit}
      type="submit"
      disabled={!isFormValid}
      onClick={handleCreateEvent}
    >
      Create new event
    </button>
  </form>
);

EventCreate.propTypes = {
  handleCreateEvent: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  time: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
  isFormValid: PropTypes.bool.isRequired,
};

export default EventCreate;
