import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import EventEditContainer from '../EventEdit/EventEditContainer';
import css from './Event.module.css';

const Event = ({ event, editing, handleEditEvent, handleDeleteEvent }) => (
  <div className={css.event}>
    {editing ? (
      <EventEditContainer />
    ) : (
      <Fragment>
        <div className={css.head}>
          <h4 className={css.title}>
            {event.title}
          </h4>
          <div className={css.controls}>
            {!editing ? (
              <button
                className={css.edit}
                type="button"
                onClick={handleEditEvent}
              >
                edit
              </button>
            ) : null}
            <button
              className={css.delete}
              type="button"
              onClick={handleDeleteEvent}
            >
              X
            </button>
          </div>
        </div>

        <p className={css.time}>
          {event.time}
        </p>

        <p className={css.description}>
          {event.description}
        </p>
      </Fragment>
    )}
  </div>
);

Event.propTypes = {
  event: PropTypes.shape({
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    date: PropTypes.instanceOf(Date).isRequired,
  }).isRequired,
};

export default Event;
