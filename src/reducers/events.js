import uuid from 'uuid/v4';
import {
  CREATE_EVENT,
  DELETE_EVENT, EDIT_EVENT_CANCEL,
  EDIT_EVENT_FINISH,
  EDIT_EVENT_START,
} from '../constants/eventActions';

const initialState = {
  list: [
    {
      id: uuid(),
      title: 'First event',
      description: 'Some event description',
      date: new Date(),
    },
    {
      id: uuid(),
      title: 'Second event',
      description: 'Some event description',
      date: new Date(),
    },
    {
      id: uuid(),
      title: 'Third event',
      description: 'Some event description',
      date: new Date(),
    },
    {
      id: uuid(),
      title: 'One more event',
      description: 'Some event description',
      date: new Date(),
    },
  ],
  editingEventId: '',
};

export default function events(state = initialState, action) {
  switch (action.type) {
    case CREATE_EVENT:
      return {
        ...state,
        list: [...state.list, action.payload],
      };
    case DELETE_EVENT:
      return {
        ...state,
        list: state.list.filter(event => event.id !== action.payload),
      };
    case EDIT_EVENT_START:
      return {
        ...state,
        editingEventId: action.payload,
      };
    case EDIT_EVENT_CANCEL:
      return {
        ...state,
        editingEventId: '',
      };
    case EDIT_EVENT_FINISH:
      return {
        ...state,
        list: state.list.map((event) => {
          if (event.id === action.payload.id) {
            return action.payload;
          }
          return event;
        }),
        editingEventId: '',
      };
    default:
      return state;
  }
}
