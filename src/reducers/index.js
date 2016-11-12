import { routerReducer as routing } from 'react-router-redux'
import { combineReducers } from 'redux'

import windowReducer from './WindowReducer'
import messagesReducer from './MessagesReducer'
import loginReducer from './LoginReducer'
import errorReducer from './ErrorsReducer'
import dialogsReducer from './DialogsReducer'
import currentDialogReducer from './SelectedDialogReducer'

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
