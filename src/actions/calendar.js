import {
  CHANGE_MONTH,
  SELECT_DATE,
  TEST,
} from '../constants/calendarActions';

export function test(payload) {
  return {
    type: TEST,
    payload,
  };
}

export const changeMonth = date => ({
  type: CHANGE_MONTH,
  payload: date,
});

export const selectDate = date => ({
  type: SELECT_DATE,
  payload: date,
});
