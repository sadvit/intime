import { routerReducer } from 'react-router-redux'
import { combineReducers } from 'redux'

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
  error: errorReducer,
  routing: routerReducer
})

export default rootReducer
