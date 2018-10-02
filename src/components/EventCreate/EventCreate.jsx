import PropTypes from 'prop-types';
import React from 'react';
import Button from '../Button/Button';
import css from './EventCreate.module.css';
import Input from '../Input/Input';

const EventCreate = ({
  handleCreateEvent,
  title,
  time,
  description,
  handleChange,
  isFormValid,
}) => (
  <form className={css.form}>
    <Input
      className={css.inputTitle}
      id="title"
      type="text"
      placeholder="Event's title"
      value={title}
      onChange={handleChange}
    />
    <Input
      className={css.inputTime}
      id="time"
      type="time"
      value={time}
      onChange={handleChange}
    />
    <Input
      className={css.inputDescription}
      id="description"
      placeholder="Event's description"
      value={description}
      onChange={handleChange}
    />
    <Button
      className={css.submit}
      type="submit"
      disabled={!isFormValid}
      onClick={handleCreateEvent}
    >
      Create new event
    </Button>
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
