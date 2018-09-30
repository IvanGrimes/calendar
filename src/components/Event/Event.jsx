import React from 'react';
import PropTypes from 'prop-types';
import EventEditContainer from '../EventEdit/EventEditContainer';

const Event = ({ event, editing, handleEditEvent, handleDeleteEvent }) => (
  editing ? (
    <EventEditContainer />
  ) : (
    <div>
      <div>
        <p>
          {event.time}
        </p>
        <h4>
          {event.title}
        </h4>
        {!editing ? (
          <button
            type="button"
            onClick={handleEditEvent}
          >
            edit
          </button>
        ) : null}
        <button
          type="button"
          onClick={handleDeleteEvent}
        >
          X
        </button>
      </div>

      <p>
        {event.description}
      </p>
    </div>
  )
);

Event.propTypes = {
  event: PropTypes.shape({
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    date: PropTypes.instanceOf(Date).isRequired,
  }).isRequired,
};

export default Event;
