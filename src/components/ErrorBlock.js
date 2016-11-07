import React, { Component } from 'react'
import classNames from 'classnames'
import { connect } from 'react-redux'

class ErrorBlock extends Component {
  render() {
    let errorStyle = classNames({
      'error-block': true,
      'show': this.props.error.visible
    });
    return (
      <div className={errorStyle}>{this.props.error.message}</div>
    )
  }
}

export default connect((state) => {
  return { error: state.error };
})(ErrorBlock)
