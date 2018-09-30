import { CREATE_EVENT, DELETE_EVENT } from '../constants/eventActions';

export const createEvent = event => ({
  type: CREATE_EVENT,
  payload: event,
});

export const deleteEvent = id => ({
  type: DELETE_EVENT,
  payload: id,
});
