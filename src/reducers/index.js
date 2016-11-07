import { routerReducer as routing } from 'react-router-redux'
import { combineReducers } from 'redux'

import windowReducer from './windowReducer'
import messagesReducer from './messagesReducer'
import loginReducer from './loginReducer'
import errorReducer from './errorReducer'
import dialogsReducer from './dialogsReducer'
import currentDialogReducer from './currentDialogReducer'

const rootReducer = combineReducers({
  user: loginReducer,
  messages: messagesReducer,
  dialogs: dialogsReducer,
  currentDialog: currentDialogReducer,
  window: windowReducer,
  error: errorReducer,
  routing
})

export default rootReducer
