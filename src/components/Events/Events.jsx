import dateFns from 'date-fns';
import React from 'react';
import PropTypes from 'prop-types';
import EventContainer from '../Event/EventContainer';
import EventCreateContainer from '../EventCreate/EventCreateContainer';

const Events = ({ selectedDate, events }) => (
  <div>
    <h3>
      Events from&nbsp;
      {dateFns.format(selectedDate, 'DD MMMM, YYYY')}
    </h3>
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
  selectedDate: PropTypes.instanceOf(Date).isRequired,
  events: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    date: PropTypes.instanceOf(Date).isRequired,
  })).isRequired,
};

export default Events;
