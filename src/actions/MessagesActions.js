import { CALL_API } from '../middlewares/Api'

export const MESSAGE_SENT = 'MESSAGE_SENT';

export const LOAD_USER_MESSAGES_REQUEST = 'LOAD_USER_MESSAGES_REQUEST';
export const LOAD_USER_MESSAGES_SUCCESS = 'LOAD_USER_MESSAGES_SUCCESS';
export const LOAD_USER_MESSAGES_FAILURE = 'LOAD_USER_MESSAGES_FAILURE';

export const messagesForUserAction = (user_id, offset, count) => {
  return {
    [CALL_API]: {
      types: [ LOAD_USER_MESSAGES_REQUEST, LOAD_USER_MESSAGES_SUCCESS, LOAD_USER_MESSAGES_FAILURE ],
      endpoint: 'messages.getHistory',
      params: { user_id, offset, count },
      method: 'GET'
    },
    info: {
      user_id
    }
  }
}

export const loadMessagesForUser = (user_id, offset, count) => (dispatch, getState) => {
  dispatch(messagesForUserAction(user_id, offset, count))
}

export const LOAD_CHAT_MESSAGES_REQUEST = 'LOAD_CHAT_MESSAGES_REQUEST';
export const LOAD_CHAT_MESSAGES_SUCCESS = 'LOAD_CHAT_MESSAGES_SUCCESS';
export const LOAD_CHAT_MESSAGES_FAILURE = 'LOAD_CHAT_MESSAGES_FAILURE';

export const messagesForChatAction = (chat_id, offset, count) => {
  return {
    [CALL_API]: {
      types: [ LOAD_CHAT_MESSAGES_REQUEST, LOAD_CHAT_MESSAGES_SUCCESS, LOAD_CHAT_MESSAGES_FAILURE ],
      endpoint: 'messages.getHistory',
      params: { chat_id, offset, count },
      method: 'GET'
    },
    info: {
      chat_id
    }
  }
}

export const loadMessagesForChat = (chat_id, offset, count) => (dispatch, getState) => {
  dispatch(messagesForChatAction(chat_id, offset, count))
}

export const SEND_MESSAGE_USER_REQUEST = 'SEND_MESSAGE_USER_REQUEST';
export const SEND_MESSAGE_USER_SUCCESS = 'SEND_MESSAGE_USER_SUCCESS';
export const SEND_MESSAGE_USER_FAILURE = 'SEND_MESSAGE_USER_FAILURE';

export const sendMessageForUserAction = (user_id, message) => {
  return {
    [CALL_API]: {
      types: [ SEND_MESSAGE_USER_REQUEST, SEND_MESSAGE_USER_SUCCESS, SEND_MESSAGE_USER_FAILURE ],
      endpoint: `messages/user/${user_id}`,
      method: 'POST',
      data: JSON.stringify({
        body: message
      })
    }
  }
}

export const sendMessageForUser = (user_id, message) => (dispatch, getState) => {
  dispatch(sendMessageForUserAction(user_id, message))
}

export const SEND_MESSAGE_CHAT_REQUEST = 'SEND_MESSAGE_CHAT_REQUEST';
export const SEND_MESSAGE_CHAT_SUCCESS = 'SEND_MESSAGE_CHAT_SUCCESS';
export const SEND_MESSAGE_CHAT_FAILURE = 'SEND_MESSAGE_CHAT_FAILURE';

export const sendMessageForChatAction = (chat_id, message) => {
  return {
    [CALL_API]: {
      types: [ SEND_MESSAGE_CHAT_REQUEST, SEND_MESSAGE_CHAT_SUCCESS, SEND_MESSAGE_CHAT_FAILURE ],
      endpoint: `messages/chat/${chat_id}`,
      method: 'POST',
      data: JSON.stringify({
        body: message
      })
    }
  }
}

export const sendMessageForChat = (chat_id, message) => (dispatch, getState) => {
  dispatch(sendMessageForChatAction(chat_id, message))
}
