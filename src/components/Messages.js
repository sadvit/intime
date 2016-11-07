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

  renderMessages() {
    let messages = this.props.messages;
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

  render() {
    return (
      <div className="right-bar">
        <MessagesHeader/>
        <div className="messages-box">
          <Scrollbars autoHide
                      autoHideTimeout={1000}
                      autoHideDuration={200}
                      onScrollStop={this.onScrollStop.bind(this)}
                      ref={(c) => this.messagesScroll = c}>
            {this.renderMessages()}
          </Scrollbars>
        </div>
        <MessagesSender/>
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
