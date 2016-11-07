import React, { Component } from 'react'

export default class DialogsHeader extends Component {
  render() {
    return (
      <div className="side-header">
        <div className="search-button">
          <i className="fa fa-search" aria-hidden="true"/>
        </div>
        <div className="search-area">
          <input placeholder="Search" className="search-input"/>
        </div>
        <div className="refresh-button">
          <img alt={this.props.alt} src="assets/refresh.svg"/>
        </div>
      </div>
    )
  }
}
