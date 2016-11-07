import React, { Component } from 'react'

export default class MessagesSender extends Component {

  handleMessageChange(event) {
    this.message = event.target.value;
  }

  handleMessageSend(event) {
    if (event.keyCode === 13) {
      let dialog = this.state.messData.selectedDialog;
      if (dialog.userId) {
        /*this.getFlux().actions.sendMessage({
          userId: dialog.userId,
          message: this.message
        });*/
      } else {
        /*this.getFlux().actions.sendMessage({
          chatId: dialog.chatId,
          message: this.message
        });*/
      }
      event.target.value = ''
    }
  }

  render() {
    return (
      <div className="message-sender">
        <input placeholder="Message"
          onChange={this.handleMessageChange}
          onKeyDown={this.handleMessageSend}
          className="message-input"/>
      </div>
    )
  }

}
