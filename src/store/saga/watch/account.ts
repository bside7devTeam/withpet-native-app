import axios from '@api/axios';
import {put, takeLatest} from 'redux-saga/effects';
import {
  getAccountInfoFail,
  getAccountInfoSuccess,
  GET_ACCOUNT_INFO_INIT,
} from '@store/redux/reducer/account/actions';

/**
 * User 정보 가져오기
 */
export function* getAccount() {
  try {
    const {data} = yield axios.get('/accounts/userInfo');
    yield put(getAccountInfoSuccess(data));
  } catch (error) {
    yield put(getAccountInfoFail());
  }
}

export function* watchCallgetAccountInfo() {
  yield takeLatest(GET_ACCOUNT_INFO_INIT, getAccount);
}
