import { takeLatest, select, put, call, fork } from 'redux-saga/effects';
import { getUserInfo } from './api';
import { getApiKey } from '../Auth/reducer';
import { fetchRequest, fetchSuccess, fetchFailure } from './actions';

function* fetchUserWatcher() {
  yield takeLatest(fetchRequest, fetchUserFlow);
}

export function* fetchUserFlow(action) {
  try{
    const apiKey = yield select(getApiKey);
    const userInfo = yield call(getUserInfo, apiKey, action.payload);
    yield put(fetchSuccess(userInfo))
  } catch (error){
    yield put(fetchFailure(error))
  }
}

export default function*() {
  yield fork(fetchUserWatcher);
}
