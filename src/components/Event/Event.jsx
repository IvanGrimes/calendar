import dateFns from 'date-fns';
import React from 'react';
import PropTypes from 'prop-types';

const Event = ({ event, handleDeleteEvent }) => (
  <div>
    <div>
      <p>
        {dateFns.format(event.date, 'HH:mm')}
      </p>
      <h4>
        {event.title}
      </h4>
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
);

Event.propTypes = {
  event: PropTypes.shape({
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    date: PropTypes.instanceOf(Date).isRequired,
  }).isRequired,
};

export default Event;
