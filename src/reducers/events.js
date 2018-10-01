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
      date: new Date('Sun Oct 01 2018 07:00:00 GMT+0300 (Москва, стандартное время)'),
    },
    {
      id: uuid(),
      title: 'First event',
      description: 'Some event description',
      date: new Date('Sun Oct 01 2018 07:00:00 GMT+0300 (Москва, стандартное время)'),
    },
    {
      id: uuid(),
      title: 'Second event',
      description: 'Some event description',
      date: new Date('Sun Oct 22 2018 19:00:00 GMT+0300 (Москва, стандартное время)'),
    },
    {
      id: uuid(),
      title: 'Second event',
      description: 'Some event description',
      date: new Date('Sun Oct 22 2018 19:00:00 GMT+0300 (Москва, стандартное время)'),
    },
    {
      id: uuid(),
      title: 'Third event',
      description: 'Some event description',
      date: new Date('Sun Oct 30 2018 12:00:00 GMT+0300 (Москва, стандартное время)'),
    },
    {
      id: uuid(),
      title: 'Third event',
      description: 'Some event description',
      date: new Date('Sun Oct 30 2018 12:00:00 GMT+0300 (Москва, стандартное время)'),
    },
    {
      id: uuid(),
      title: 'Third event',
      description: 'Some event description',
      date: new Date('Sun Oct 30 2018 12:00:00 GMT+0300 (Москва, стандартное время)'),
    },
    {
      id: uuid(),
      title: 'One more event',
      description: 'Some event description',
      date: new Date('Sun Oct 12 2018 09:00:00 GMT+0300 (Москва, стандартное время)'),
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
