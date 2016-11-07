import * as ActionTypes from '../actions'

const loginReducer = (state = {}, action) => {
  const { type, success, failure } = action;

  switch (type) {
    case ActionTypes.USER_VK_SUCCESS:
      return success.response[0]; // TODO: refactoring to normalizer
    default:
      return state;
  }

}

export default loginReducer
