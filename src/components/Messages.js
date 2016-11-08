import React, { Component, PropTypes } from 'react'
import Message from '../components/Message.js'
import MessagesHeader from '../components/MessagesHeader.js'
import MessagesSender from '../components/MessagesSender.js'
import {Scrollbars} from 'react-custom-scrollbars'
import { connect } from 'react-redux'

class Messages extends Component {

  static propTypes = {
    messages: PropTypes.array,
    dialogs: PropTypes.array,
    onScrollTop: PropTypes.func.isRequired
  }

  onScrollStop() {
    let top = this.messagesScroll.getValues().top;
    if (top === 0) {
      this.props.onScrollTop();
    }
  }

  isHaveMessages() {
    return this.props.messages && Object.keys(this.props.messages).length >= 0 // TODO: refactoring this to currentDialog -> messages
  }

  renderMessages() {
    let messages = this.props.messages;
    if (this.isHaveMessages()) {
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
    if (this.isHaveMessages()) {
      return <MessagesHeader/>
    }
  }

  renderSender() {
    if (this.isHaveMessages()) {
      return <MessagesSender/>
    }
  }

  renderMessagesBox() {
    if (this.isHaveMessages()) {
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
    messages: state.messages.messages,
    dialogs: state.dialogs
  }
})(Messages)
