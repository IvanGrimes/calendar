import { CHANGE_MONTH, SELECT_DATE } from '../constants/actionTypes';

export const changeMonth = date => ({
  type: CHANGE_MONTH,
  payload: date,
});

export const selectDate = date => ({
  type: SELECT_DATE,
  payload: date,
});
