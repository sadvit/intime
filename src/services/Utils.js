import _ from 'lodash'

export function isChatDialog(selectedDialog) {
  return selectedDialog && _.isNumber(selectedDialog.chat_id);
}

export function isUserDialog(selectedDialog) {
  return selectedDialog && !_.isNumber(selectedDialog.chat_id) && _.isNumber(selectedDialog.uid);
}
