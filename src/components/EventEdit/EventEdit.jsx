import React, { Component } from 'react';
import PropTypes from 'prop-types';
import css from './EventEdit.module.css';

class EventEdit extends Component {
  static propTypes = {};

  render() {
    const { handleCancelEdit, handleFinishEdit, title, time, description, handleChange, isFormValid } = this.props;

    return (
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
        <textarea
          className={css.inputDescription}
          id="description"
          placeholder="description"
          value={description}
          onChange={handleChange}
        ></textarea>
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
  }
}

export default EventEdit;
