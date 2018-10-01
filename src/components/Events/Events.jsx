import React from 'react';
import PropTypes from 'prop-types';
import EventContainer from '../Event/EventContainer';
import EventCreateContainer from '../EventCreate/EventCreateContainer';
import css from './Events.module.css';

const Events = ({ selectedDate, events, formattedDate }) => (
  <div className={css.container}>
    <h3 className={css.title}>
      Events from&nbsp;
      {formattedDate}
    </h3>
    <div className={css.events}>
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
