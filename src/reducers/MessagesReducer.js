import * as ActionTypes from '../actions'

const messagesReducer = (state = [], action) => {
  const { type, response, userId: newUserId, chatId: newChatId } = action;

  let resp = [];
  if (response) {
    resp = response.response.slice(1, response.response.length);    
  }

  switch (type) {
    case ActionTypes.LOAD_MESSAGES_SUCCESS:
      const { messages, userId: oldUserId, chatId: oldChatId } = state;
      let oldMessages;
      if (newUserId !== oldUserId || newChatId !== oldChatId) {
        oldMessages = [];
      } else {
        oldMessages = messages.slice();
      }
      let newMessages = resp.reverse();
      let currentMessages = newMessages.concat(oldMessages);
      return { messages: currentMessages, userId: newUserId, chatId: newChatId };
    default:
      return state;
  }

}

export default messagesReducer
