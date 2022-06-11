import {all} from 'redux-saga/effects';
import {watchCallgetAccountInfo} from './watch/account';

export default function* root() {
  yield all([watchCallgetAccountInfo()]);
}
