import { takeLatest, select, put, call, fork } from 'redux-saga/effects';
import { fetchRequest, fetchSuccess, fetchFailure } from './actions';
import { getFollowersInfo } from './api';
import { getApiKey } from '../Auth/reducer'

function* fetchFollowersWatcher() {
  yield takeLatest(fetchRequest, fetchFollowersFlow); // Замените вопросительный знак на подходящий экшен
}

export function* fetchFollowersFlow(action) {
  // Реализуйте загрузку данных
  // Используйте экшены FETCH_SUCCESS / FETCH_FAILURE
    try {
        const apiKey = yield select(getApiKey);
        const followersInfo = yield call(getFollowersInfo, apiKey, action.payload);
        yield put(fetchSuccess(followersInfo));
    } catch (error) {
        yield put(fetchFailure(error));
    }
}

export default function*() {
  yield fork(fetchFollowersWatcher);
}
