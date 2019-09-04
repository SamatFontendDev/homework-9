import { createAction } from 'redux-actions';

// Реализуйте недостающие экшены
export const fetchRequest = createAction('FETCH_USER_REQUEST');
export const fetchSuccess = createAction('FETCH_USER_SUCCESS');
export const fetchFailure = createAction('FETCH_USER_FAILURE');