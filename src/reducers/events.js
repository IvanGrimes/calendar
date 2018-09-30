import dateFns from 'date-fns';
import uuid from 'uuid/v4';
import { CREATE_EVENT, DELETE_EVENT } from '../constants/eventActions';

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
    default:
      return state;
  }
}
