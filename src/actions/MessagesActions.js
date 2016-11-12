import { CALL_API } from '../middlewares/Api'
import $ from 'jquery'

export const MESSAGE_SENT = 'MESSAGE_SENT';

export const LOAD_MESSAGES_REQUEST = 'LOAD_MESSAGES_REQUEST';
export const LOAD_MESSAGES_SUCCESS = 'LOAD_MESSAGES_SUCCESS';
export const LOAD_MESSAGES_FAILURE = 'LOAD_MESSAGES_FAILURE';

export const messagesForUserAction = (user_id, offset, count) => {
  let access_token = localStorage.getItem('access_token');
  return {
    [CALL_API]: {
      types: [ LOAD_MESSAGES_REQUEST, LOAD_MESSAGES_SUCCESS, LOAD_MESSAGES_FAILURE ],
      userId: user_id,
      endpoint: `messages.getHistory?${$.param({access_token, user_id, offset, count})}`,
      method: 'GET'
    }
  }
}

export const loadMessagesForUser = (userId, offset, count) => (dispatch, getState) => {
  dispatch(messagesForUserAction(userId, offset, count))
}

export const LOAD_CHAT_REQUEST = 'LOAD_CHAT_REQUEST';
export const LOAD_CHAT_SUCCESS = 'LOAD_CHAT_SUCCESS';
export const LOAD_CHAT_FAILURE = 'LOAD_CHAT_FAILURE';

export const messagesForChatAction = (chatId, offset, count) => {
  return {
    [CALL_API]: {
      types: [ LOAD_CHAT_REQUEST, LOAD_CHAT_SUCCESS, LOAD_CHAT_FAILURE ],
      chatId: chatId,
      endpoint: `messages/chat/${chatId}?${$.param({offset, count})}`,
      method: 'GET'
    }
  }
}

export const loadMessagesForChat = (chatId, offset, count) => (dispatch, getState) => {
  dispatch(messagesForChatAction(chatId, offset, count))
}

export const SEND_MESSAGE_USER_REQUEST = 'SEND_MESSAGE_USER_REQUEST';
export const SEND_MESSAGE_USER_SUCCESS = 'SEND_MESSAGE_USER_SUCCESS';
export const SEND_MESSAGE_USER_FAILURE = 'SEND_MESSAGE_USER_FAILURE';

export const sendMessageForUserAction = (userId, message) => {
  return {
    [CALL_API]: {
      types: [ SEND_MESSAGE_USER_REQUEST, SEND_MESSAGE_USER_SUCCESS, SEND_MESSAGE_USER_FAILURE ],
      endpoint: `messages/user/${userId}`,
      method: 'POST',
      data: JSON.stringify({
        body: message
      })
    }
  }
}

export const sendMessageForUser = (userId, message) => (dispatch, getState) => {
  dispatch(sendMessageForUserAction(userId, message))
}

export const SEND_MESSAGE_CHAT_REQUEST = 'SEND_MESSAGE_CHAT_REQUEST';
export const SEND_MESSAGE_CHAT_SUCCESS = 'SEND_MESSAGE_CHAT_SUCCESS';
export const SEND_MESSAGE_CHAT_FAILURE = 'SEND_MESSAGE_CHAT_FAILURE';

export const sendMessageForChatAction = (chatId, message) => {
  return {
    [CALL_API]: {
      types: [ SEND_MESSAGE_CHAT_REQUEST, SEND_MESSAGE_CHAT_SUCCESS, SEND_MESSAGE_CHAT_FAILURE ],
      endpoint: `messages/chat/${chatId}`,
      method: 'POST',
      data: JSON.stringify({
        body: message
      })
    }
  }
}

export const sendMessageForChat = (chatId, message) => (dispatch, getState) => {
  dispatch(sendMessageForChatAction(chatId, message))
}
