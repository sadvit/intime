import React, { Component } from 'react'

export default class MessagesSender extends Component {

  handleMessageChange(event) {
    this.message = event.target.value;
  }

  handleMessageSend(event) {
    if (event.keyCode === 13) {
      let dialog = this.state.messData.selectedDialog;
      if (dialog.user_id) {
        /*this.getFlux().actions.sendMessage({
          user_id: dialog.user_id,
          message: this.message
        });*/
      } else {
        /*this.getFlux().actions.sendMessage({
          chat_id: dialog.chat_id,
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
