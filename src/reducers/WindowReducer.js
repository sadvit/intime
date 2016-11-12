import * as ActionTypes from '../actions'
import { remote } from 'electron'

const windowReducer = (state = null, action) => {
  const { type } = action

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

  return state
}

export default windowReducer
