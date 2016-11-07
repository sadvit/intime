import React, { Component } from 'react'
import classNames from 'classnames'
import { connect } from 'react-redux'
import { dialogSelected } from '../actions'

class Dialog extends Component {

  selectDialog(dialog) {
    this.props.dialogSelected(dialog);
  }

  render() {
    let dialogStyle = classNames({
      'conv-tile': true,
      'selected': this.props.model.selected,
      'unread': !this.props.model.readState
    });
    return (
      <div onClick={this.selectDialog.bind(this, this.props.model)} className={dialogStyle}>
        <div className="left-part">
          <div className="sender-img"><img alt={this.props.alt} src={this.props.model.photo}/></div>
          <div className="social-img"><img alt={this.props.alt} src="assets/vk.svg"/></div>
        </div>
        <div className="center-part">
          <div className="tile-title"><span>{this.props.model.title}</span></div>
          <div className="tile-preview"><span dangerouslySetInnerHTML={{__html: this.props.model.body}}/>
          </div>
        </div>
        <div className="right-part">
          <div className="tile-delete"><i className="fa fa-times" aria-hidden="true"/></div>
          <div className="send-time"><span>{this.props.model.date}</span></div>
        </div>
      </div>
    )
  }
}

export default connect(null, {
  dialogSelected
})(Dialog)
