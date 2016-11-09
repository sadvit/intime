import { push } from 'react-router-redux'

export const SHOW_ERROR_MESSAGE = 'SHOW_ERROR_MESSAGE';
export const HIDE_ERROR_MESSAGE = 'HIDE_ERROR_MESSAGE';
const ERROR_HIDE_TIMEOUT = 3000;

export const showError = (message) => (dispatch) => {
  dispatch({ type: SHOW_ERROR_MESSAGE, message })
  setTimeout(() => {
    dispatch({ type: HIDE_ERROR_MESSAGE })
  }, ERROR_HIDE_TIMEOUT);
}

export const handleErrorCode = (failure) => (dispatch) => {
  switch (failure.error_code) {
    case 5:
      localStorage.removeItem("access_token");
      localStorage.removeItem("user_id");
      dispatch(push('/index'));
      break;
    default:
      break;
  }
}
