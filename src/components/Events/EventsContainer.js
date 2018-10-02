import dateFns from 'date-fns';
import PropTypes from 'prop-types';
import { createElement } from 'react';
import { connect } from 'react-redux';
import { getSelectedDate, sortEventsByDate } from '../../selectors';
import Events from './Events';

const mapStateToProps = state => ({
  events: sortEventsByDate(state),
  selectedDate: getSelectedDate(state),
});

const EventsContainer = ({ events, selectedDate }) => (
  createElement(
    Events,
    {
      events,
      formattedDate: dateFns.format(selectedDate, 'DD MMMM, YYYY'),
    },
  )
);

EventsContainer.propTypes = {
  events: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    date: PropTypes.instanceOf(Date).isRequired,
  })).isRequired,
  selectedDate: PropTypes.instanceOf(Date).isRequired,
};

export default connect(mapStateToProps)(EventsContainer);
