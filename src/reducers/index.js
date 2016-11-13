import { routerReducer } from 'react-router-redux'
import { combineReducers } from 'redux'

import messagesReducer from './MessagesReducer'
import loginReducer from './LoginReducer'
import errorReducer from './ErrorsReducer'
import dialogsReducer from './DialogsReducer'
import selectedDialogReducer from './SelectedDialogReducer'

const rootReducer = combineReducers({
  user: loginReducer,
  messages: messagesReducer,
  dialogs: dialogsReducer,
  selectedDialog: selectedDialogReducer,
  error: errorReducer,
  routing: routerReducer
})

export default rootReducer
