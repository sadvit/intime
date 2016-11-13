import * as ActionTypes from '../actions'

const selectedDialogReducer = (state = {}, action) => {
  const { type, dialog } = action;

  switch (type) {
    case ActionTypes.DIALOG_SELECTED:
      return dialog;
    default:
      return state;
  }

}

export default selectedDialogReducer
