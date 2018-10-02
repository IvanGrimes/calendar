import PropTypes from 'prop-types';
import React from 'react';
import css from './EventEdit.module.css';

const EventEdit = ({
  handleCancelEdit,
  handleFinishEdit,
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
      placeholder="title"
      value={title}
      onChange={handleChange}
    />
    <input
      className={css.inputTime}
      id="time"
      type="time"
      placeholder="time"
      value={time}
      onChange={handleChange}
    />
    <input
      className={css.inputDescription}
      id="description"
      placeholder="description"
      value={description}
      onChange={handleChange}
    />
    <div className={css.controls}>
      <button
        className={css.done}
        type="submit"
        disabled={!isFormValid}
        onClick={handleFinishEdit}
      >
        Done
      </button>
      <button
        className={css.cancel}
        type="button"
        onClick={handleCancelEdit}
      >
        Cancel
      </button>
    </div>
  </form>
);

EventEdit.propTypes = {
  handleCancelEdit: PropTypes.func.isRequired,
  handleFinishEdit: PropTypes.func.isRequired,
  handleChange: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  time: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  isFormValid: PropTypes.bool.isRequired,
};

export default EventEdit;
