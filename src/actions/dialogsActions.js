import { messagesForUserAction, messagesForChatAction } from './messagesActions'
import DialogService from '../services/DialogService'

export const LOAD_DIALOGS_REQUEST = 'LOAD_DIALOGS_REQUEST';
export const LOAD_DIALOGS_SUCCESS = 'LOAD_DIALOGS_SUCCESS';
export const LOAD_DIALOGS_FAILURE = 'LOAD_DIALOGS_FAILURE';

export const loadDialogsForUser = (offset, count) => (dispatch, getState) => {
  dispatch({ type: LOAD_DIALOGS_REQUEST });
  DialogService.fetchDialogs(offset, count)
    .then(success => {
      dispatch({ type: LOAD_DIALOGS_SUCCESS, success });
    })
    .catch(failure => {
      dispatch({ type: LOAD_DIALOGS_FAILURE, failure });
    })
}

export const DIALOG_SELECTED = 'DIALOG_SELECTED';

const dialogSelectedAction = (dialog) => {
  if (dialog.uid) {
    return messagesForUserAction(dialog.uid, 0, 20);
  } else if (dialog.chat_id) {
    return messagesForChatAction(dialog.chat_id, 0, 20);
  } else {
    console.error('Undefined dialog type selected');
  }
}

export const dialogSelected = (dialog) => (dispatch, getState) => {
  dispatch({ type: DIALOG_SELECTED, dialog });
  dispatch(dialogSelectedAction(dialog));
}
