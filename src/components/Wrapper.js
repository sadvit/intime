import React, { Component } from 'react'
import Header from '../components/Header.js'
import ErrorBlock from '../components/ErrorBlock.js'
import classNames from 'classnames'

export default class Wrapper extends Component {
  render() {
    let wrapperStyle = classNames({
      'content-box': true,
      [this.props.pageName]: true
    });
    return (
      <div className="appBox">
        <Header/>
        <div className="wrapper">
          <div className="content">
            <div className={wrapperStyle}>
              {this.props.children}
            </div>
          </div>
          <ErrorBlock/>
        </div>
      </div>
    )
  }
}
