import dateFns from 'date-fns';
import { createSelector } from 'reselect';

export const getCurrentMonth = state => state.calendar.currentMonth;
export const getSelectedDate = state => state.calendar.selectedDate;
const getEvents = state => state.events.list;
export const getEditingEventId = state => state.events.editingEventId;

const getEventsBySelectedDate = createSelector(
  getEvents,
  getSelectedDate,
  (events, selectedDate) => events.filter(event => dateFns.isSameDay(event.date, selectedDate)),
);

export const sortEventsByDate = createSelector(
  getEventsBySelectedDate,
  events => events.sort((a, b) => a.date - b.date),
);

export const getEditingEvent = createSelector(
  getEvents,
  getEditingEventId,
  (events, editingEventId) => events.filter(event => event.id === editingEventId)[0],
);
