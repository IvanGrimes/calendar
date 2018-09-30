import dateFns from 'date-fns';
import React from 'react';
import PropTypes from 'prop-types';
import EventEditContainer from '../EventEdit/EventEditContainer';

const Event = ({ event, editingEventId, handleEditEvent, handleDeleteEvent }) => (
  editingEventId === event.id ? (
    <EventEditContainer />
  ) : (
    <div>
      <div>
        <p>
          {dateFns.format(event.date, 'hh:mm')}
          {dateFns.format(event.date, 'A')}
        </p>
        <h4>
          {event.title}
        </h4>
        {!editingEventId ? (
          <button
            type="button"
            onClick={() => handleEditEvent(event.id)}
          >
            edit
          </button>
        ) : null}
        <button
          type="button"
          onClick={() => handleDeleteEvent(event.id)}
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
