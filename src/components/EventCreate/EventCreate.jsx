import PropTypes from 'prop-types';
import React from 'react';
import css from './EventCreate.module.css';

const EventCreate = ({
  handleCreateEvent,
  title,
  time,
  description,
  handleChange,
  isFormValid
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
    <textarea
      className={css.inputDescription}
      id="description"
      placeholder="Event's description"
      value={description}
      onChange={handleChange}
    ></textarea>
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
};

export default EventCreate;
