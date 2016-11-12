import * as ActionTypes from '../actions'

const dialogsReducer = (state = [], action) => {
  const { type, success } = action;

  switch (type) {
    case ActionTypes.LOAD_DIALOGS_SUCCESS:
      let oldDialogs = state.slice();
      let currentDialogs = oldDialogs.concat(success);
      return currentDialogs;
    default:
      return state;
  }

}

export default dialogsReducer
