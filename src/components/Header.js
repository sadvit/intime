import React, { Component } from 'react'
import {browserHistory} from 'react-router'
import { connect } from 'react-redux'
import { windowMinimize, windowClose } from '../actions'

class Header extends Component {

  minimize() {
    this.props.windowMinimize()
  }

  close() {
    this.props.windowClose()
  }

  back() {
    browserHistory.push('/');
  }

  render() {
    return (
      <header className="headerBox electron-move">
        <div className="title">
          <div className="logo-cont electron-not-move">
            <img alt={this.props.alt} src="assets/logo.svg"/>
          </div>
          <div className="header-menu">
            <span className="active electron-not-move">Messages</span>
            <span className="electron-not-move">Settings</span>
          </div>
        </div>
        <div className="window-controls">
          <div className="min-control electron-not-move">
            <img alt={this.props.alt} onClick={this.minimize.bind(this)} src="assets/min.png"/>
          </div>
          <div className="close-control electron-not-move">
            <img alt={this.props.alt} onClick={this.close.bind(this)} src="assets/close.png"/>
          </div>
        </div>
      </header>
    )
  }
}

export default connect(null, {
  windowMinimize,
  windowClose
})(Header)
