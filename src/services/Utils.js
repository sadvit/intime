import _ from 'lodash'
import moment from 'moment'

export function isChatDialog(selectedDialog) {
  return selectedDialog && _.isNumber(selectedDialog.chat_id);
}

export function isUserDialog(selectedDialog) {
  return selectedDialog && !_.isNumber(selectedDialog.chat_id) && _.isNumber(selectedDialog.uid);
}

export function timeFormat(date) {
  return moment.unix(date).format("HH:MM");
}

export function isEmptyTitle(title) {
  return !title || title.trim() === '...';
}
