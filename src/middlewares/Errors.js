import { push } from 'react-router-redux'

export const SHOW_ERROR_MESSAGE = 'SHOW_ERROR_MESSAGE';
export const HIDE_ERROR_MESSAGE = 'HIDE_ERROR_MESSAGE';
export const ERROR_HIDE_TIMEOUT = 3000;

const localize = (failure) => {
  return failure.error_msg // TODO: refactoring to user messages
}

// Global error handler for processing error responses
export default store => next => action => {

  const { type, failure } = action;

  if (failure && type && type.includes('FAILURE')) {
    let message = localize(failure);
    next({ type: SHOW_ERROR_MESSAGE, message })
    setTimeout(() => {
      next({ type: HIDE_ERROR_MESSAGE })
    }, ERROR_HIDE_TIMEOUT);

    switch (failure.error_code) {
      case 5:
        // NOTE: authorization problem - old access token
        localStorage.removeItem("access_token");
        localStorage.removeItem("user_id");
        next(push('/index'));
        break;
      default:

    }
  }

  return next(action);

}
