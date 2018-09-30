import React from 'react';
import PropTypes from 'prop-types';
import EventContainer from '../Event/EventContainer';
import EventCreateContainer from '../EventCreate/EventCreateContainer';

const Events = ({ events }) => (
  <div>
    <h3>Events</h3>
    <div>
      {events.map(event => (
        <EventContainer
          key={event.id}
          event={event}
        />
      ))}
    </div>
    <EventCreateContainer />
  </div>
);

Events.propTypes = {
  events: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    date: PropTypes.instanceOf(Date).isRequired,
  })).isRequired,
};

export default Events;
