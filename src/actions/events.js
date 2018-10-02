import {
  CREATE_EVENT,
  DELETE_EVENT,
  EDIT_EVENT_CANCEL,
  EDIT_EVENT_FINISH,
  EDIT_EVENT_START,
} from '../constants/actionTypes';

export const createEvent = event => ({
  type: CREATE_EVENT,
  payload: event,
});

export const deleteEvent = id => ({
  type: DELETE_EVENT,
  payload: id,
});

export const editEventStart = id => ({
  type: EDIT_EVENT_START,
  payload: id,
});

export const editEventCancel = () => ({
  type: EDIT_EVENT_CANCEL,
});

export const editEventFinish = event => ({
  type: EDIT_EVENT_FINISH,
  payload: event,
});
