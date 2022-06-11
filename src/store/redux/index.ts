import {combineReducers} from 'redux';
import account from './reducer/account';

interface rootReducerType {
  account: any;
}

const rootReducer = combineReducers<rootReducerType>({
  account,
});

export default rootReducer;
