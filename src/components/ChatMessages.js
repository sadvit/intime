import React, { Component, PropTypes } from 'react'
import Message from '../components/Message.js'
import MessagesHeader from '../components/MessagesHeader.js'
import MessagesSender from '../components/MessagesSender.js'
import {Scrollbars} from 'react-custom-scrollbars'
import { connect } from 'react-redux'
import _ from 'lodash'
import { loadMessagesForChat } from '../actions'
import { MESSAGES_CHUNK } from '../const'

class ChatMessages extends Component {

  static propTypes = {
    messages: PropTypes.object,
    dialogs: PropTypes.array,
  }

  onScrollStop() {
    let top = this.messagesScroll.getValues().top;
    if (top === 0) {
      let selectedDialog = this.props.selectedDialog;
      let offset = this.getChatMessages().length;
      this.props.loadMessagesForChat(selectedDialog.chat_id, offset, MESSAGES_CHUNK);
    }
  }

  getChatId() {
    return this.props.selectedDialog.chat_id;
  }

  getChatMessages() {
    return this.props.messages.chats[this.getChatId()];
  }

  renderMessages() {
    let messages = this.getChatMessages();
    if (messages) {
      return Object.keys(messages).map((key, index) => {
        let message = messages[key];
        let last = index === messages.length - 1;
        return (
          <Message key={index} model={message} last={last}/>
        )
      })
    }
  }

  renderHeader() {
    if (this.getChatMessages()) {
      return <MessagesHeader/>
    }
  }

  renderSender() {
    if (this.getChatMessages()) {
      return <MessagesSender/>
    }
  }

  renderMessagesBox() {
    if (this.getChatMessages()) {
      return (
        <div className="messages-box">
          <Scrollbars autoHide
                      autoHideTimeout={1000}
                      autoHideDuration={200}
                      onScrollStop={this.onScrollStop.bind(this)}
                      ref={(c) => this.messagesScroll = c}>
            {this.renderMessages()}
          </Scrollbars>
        </div>
      )
    } else {
      return (
        <div className='empty-alert'><span>{"Select a chat for conversation"}</span></div>
      )
    }
  }

  render() {
    return (
      <div className="right-bar">
        {this.renderHeader()}
        {this.renderMessagesBox()}
        {this.renderSender()}
      </div>
    )
  }
}

export default connect((state, ownProps) => {
  return {
    messages: state.messages,
    dialogs: state.dialogs,
    selectedDialog: state.selectedDialog
  }
}, {loadMessagesForChat})(ChatMessages)
