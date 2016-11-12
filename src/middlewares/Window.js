import * as ActionTypes from '../actions' 
import { remote } from 'electron'

// Global handler for processing window actions
export default store => next => action => {
  const { type } = action;
  switch (type) {
   case ActionTypes.WINDOW_MINIMIZE:
     remote.getCurrentWindow().minimize();
     break;
   case ActionTypes.WINDOW_CLOSE:
     remote.getCurrentWindow().close();
     break;
   default:
     break;
  }
  return next(action);
}
