import * as ActionTypes from '../actions'

const dialogsReducer = (state = [], action) => {
  const { type, success } = action;

  switch (type) {
    case ActionTypes.LOAD_DIALOGS_SUCCESS:
      let oldDialogs = state.slice();
      let selectedDialogs = oldDialogs.concat(success);
      return selectedDialogs;
    default:
      return state;
  }

}

export default dialogsReducer
