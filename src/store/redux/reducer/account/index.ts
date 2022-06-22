import AccountState from './state';
import {
  LOGIN,
  LOGOUT,
  GET_ACCOUNT_INFO_INIT,
  GET_ACCOUNT_INFO_SUCCESS,
  GET_ACCOUNT_INFO_FAIL,
} from './actions';

export default function reducer(state = AccountState, action: any) {
  switch (action.type) {
    default:
      return state;
    case LOGIN:
      return {
        ...state,
      };
    case LOGOUT:
      return {
        ...state,
        isLoggedin: false,
        account: {
          id: 0,
          email: '',
          name: '',
          sex: '',
          contact: '',
          accountType: '',
          address: '',
          socailUID: '',
        },
        mycar: null,
      };
    case GET_ACCOUNT_INFO_INIT:
      return {...state};
    case GET_ACCOUNT_INFO_SUCCESS:
      return {
        ...state,
      };
    case GET_ACCOUNT_INFO_FAIL:
      return {...state};
  }
}
