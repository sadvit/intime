import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { loadDialogsForUser, loadUserVk } from '../actions'
import Wrapper from '../components/Wrapper.js'
import Dialogs from '../components/Dialogs.js'
import UserMessages from '../components/UserMessages.js'
import ChatMessages from '../components/ChatMessages.js'
import { INIT_DIALOGS_COUNT } from '../const'
import * as Utils from '../services/Utils'

const hasSavedAccessKey = () => {
  return localStorage.getItem('access_token') && localStorage.getItem('user_id');
}

const loadData = props => {
  const { user } = props;
  if (user && user.uid) {
    props.loadDialogsForUser(0, INIT_DIALOGS_COUNT);
  }
}

class MessagesPage extends Component {

  static propTypes = {
    user: PropTypes.object,
    loadDialogsForUser: PropTypes.func.isRequired,
    loadUserVk: PropTypes.func.isRequired
  }

  componentWillMount() {
    if (Object.keys(this.props.user).length === 0 && hasSavedAccessKey()) {
      let user_id = localStorage.getItem('user_id');
      this.props.loadUserVk(user_id);
    }
  }

  componentWillReceiveProps(nextProps) {
    let currentUser = this.props.user;
    let nextUser = nextProps.user;
    if (!currentUser || (nextUser && nextUser.uid !== currentUser.uid)) {
      loadData(nextProps)
    }
  }

  renderMessagesBox() {
    let selectedDialog = this.props.selectedDialog;
    if (Utils.isChatDialog(selectedDialog)) {
      return <ChatMessages/>
    }
    if (Utils.isUserDialog(selectedDialog)) {
      return <UserMessages/>
    }
  }

  render() {
    return (
      <Wrapper pageName="messages">
        <Dialogs/>
        {this.renderMessagesBox()}
      </Wrapper>
    )
  }

}

const mapStateToProps = (state, ownProps) => {
  return {
    user: state.user,
    messages: state.messages,
    dialogs: state.dialogs,
    selectedDialog: state.selectedDialog
  }
}

const props = {
  loadDialogsForUser, loadUserVk
}

export default connect(mapStateToProps, props)(MessagesPage)
