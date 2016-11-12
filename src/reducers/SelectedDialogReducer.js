import * as ActionTypes from '../actions'

const currentDialogReducer = (state = null, action) => {
  const { type, dialog } = action;

  switch (type) {
    case ActionTypes.DIALOG_SELECTED:
      return dialog;
    default:
      return state;
  }

}

export default currentDialogReducer
