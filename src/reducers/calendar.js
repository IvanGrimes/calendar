import {
  CHANGE_MONTH,
  SELECT_DATE,
} from '../constants/calendarActions';

const initialState = {
  currentMonth: new Date(),
  selectedDate: new Date(),
};

export default function calendar(state = initialState, action) {
  switch (action.type) {
    case CHANGE_MONTH:
      return {
        ...state,
        currentMonth: action.payload,
      };
    case SELECT_DATE:
      return {
        ...state,
        selectedDate: action.payload,
      };
    default:
      return state;
  }
}
