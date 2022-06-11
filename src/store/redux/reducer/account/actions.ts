/**
 * Actions
 */
export const LOGIN = 'LOGIN';
export const LOGOUT = 'LOGOUT';
export const GET_ACCOUNT_INFO_INIT = 'GET_ACCOUNT_INFO_INIT';
export const GET_ACCOUNT_INFO_SUCCESS = 'GET_ACCOUNT_INFO_SUCCESS';
export const GET_ACCOUNT_INFO_FAIL = 'GET_ACCOUNT_INFO_FAIL';

/**
 * Action Functions
 * */
export const getAccountInfo = () => {
  return {
    type: GET_ACCOUNT_INFO_INIT,
  };
};

export const getAccountInfoSuccess = (data: any) => {
  return {
    type: GET_ACCOUNT_INFO_SUCCESS,
    data,
  };
};
export const getAccountInfoFail = () => {
  return {
    type: GET_ACCOUNT_INFO_FAIL,
  };
};
