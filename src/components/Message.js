import React, { Component } from 'react'
import classNames from 'classnames'
import moment from 'moment'

export default class Message extends Component {

  renderAuthorBlock() {
    if (this.props.model.author && !this.props.model.out) {
        return (
          <div className="message-author">
            <span>{this.props.model.author}</span>
          </div>
        )
    }
  }

  render() {

    let messageStyle = classNames({
      'message-input': this.props.model.out,
      'message-output': !this.props.model.out
    });
    let wrapperStyle = classNames({
      'message-wrapper': true,
      'last': this.props.last
    });
    let circleStyle = classNames({
      'circle': true,
      'read': this.props.model.read_state
    });

    return (
      <div className={wrapperStyle}>
        <div className={messageStyle}>
          {this.renderAuthorBlock()}
          <div className="message-content">
            <span dangerouslySetInnerHTML={{__html: this.props.model.body}}/>
          </div>
          <div className="message-status">
            <div className={circleStyle}></div>
          </div>
          <div className="message-date">
            <span>{moment.unix(this.props.model.date).format("HH:MM")}</span>
          </div>
        </div>
      </div>
    )
  }
}
