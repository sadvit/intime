import React, { Component } from 'react'
import { connect } from 'react-redux'

class MessagesHeader extends Component {

  getCurrentDialogTitle() {
    if (this.props.currentDialog) {
      return this.props.currentDialog.title
    }
  }

  render() {
    return (
      <div className="side-header right">
        <div className="sender-view">
          <div className="sender-name"><span>{this.getCurrentDialogTitle()}</span></div>
        </div>
        <div className="message-tools">
          <div className="refresh-button">
            <img alt={this.props.alt} src="assets/refresh.svg"/>
          </div>
          <div className="search-button">
            <i className="fa fa-search" aria-hidden="true"/>
          </div>
        </div>
      </div>
    )
  }
}

export default connect((state) => {
  return {
    currentDialog: state.currentDialog
  };
})(MessagesHeader)
