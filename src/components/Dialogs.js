import React, { Component, PropTypes } from 'react'
import Dialog from '../components/Dialog.js'
import { connect } from 'react-redux'
import DialogsHeader from '../components/DialogsHeader.js'
import {Scrollbars} from 'react-custom-scrollbars';
import _ from 'lodash';

class Dialogs extends Component {

  static propTypes = {
    dialogs: PropTypes.array,
    onScrollDown: PropTypes.func.isRequired
  }

  onScrollStop() {
    let top = this.dialogsScroll.getValues().top;
    if (top === 1) {
      this.props.onScrollDown();
    }
  }

  renderDialogs() {
    let dialogs = this.props.dialogs;
    if (!_.isEmpty(dialogs)) {
      return Object.keys(dialogs).map((key, index) => {
        return <Dialog key={index} model={dialogs[key]}/>
      })
    }
  }

  render() {
    return (
      <div className="left-bar">
        <DialogsHeader/>
        <div className="conv-tile-box">
          <Scrollbars autoHide
                      autoHideTimeout={1000}
                      autoHideDuration={200}
                      onScrollStop={this.onScrollStop.bind(this)}
                      ref={(c) => this.dialogsScroll = c}>
            {this.renderDialogs()}
          </Scrollbars>
        </div>
      </div>
    )
  }
}

export default connect((state, ownProps) => {
  return { dialogs: state.dialogs }
})(Dialogs)
