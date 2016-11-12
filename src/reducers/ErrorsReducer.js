import * as ActionTypes from '../actions'

const errorReducer = (state = null, action) => {
  const { type, message } = action;

  switch (type) {
    case ActionTypes.SHOW_ERROR_MESSAGE:
      return {message, visible: true};
    case ActionTypes.HIDE_ERROR_MESSAGE:
      return {message, visible: false};
    default:
      return {message: null, visible: false};
  }

}

export default errorReducer
