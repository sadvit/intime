import * as ActionTypes from '../actions'
import _ from 'lodash'

const extractMessages = (success) => {
    let arr = success.response;
    return arr.slice(1, arr.length);
}

const getNextState = (state) => {
  if (state) {
    return _.cloneDeep(state);
  }
}

const getInitState = () => {
  return {
    users: {},
    chats: {}
  }
}

const messagesReducer = (state = getInitState(), action) => {
  switch (action.type) {
    case ActionTypes.LOAD_USER_MESSAGES_SUCCESS: {
      let nextState = getNextState(state);
      const { success, info: { user_id } } = action;
      const { users: { [user_id]: userMessages = [] } } = nextState;
      let messages = extractMessages(success).reverse();
      let currentMessages = messages.concat(userMessages);
      nextState.users[user_id] = currentMessages;
      return nextState;
    }
    case ActionTypes.LOAD_CHAT_MESSAGES_SUCCESS: {
      let nextState = getNextState(state);
      const { success, info: { chat_id } } = action;
      const { chats: { [chat_id]: chatMessages = [] } } = nextState;
      let messages = extractMessages(success).reverse();
      let currentMessages = messages.concat(chatMessages);
      nextState.chats[chat_id] = currentMessages;
      return nextState;
    }
    default:
      return state;
  }
}

export default messagesReducer
