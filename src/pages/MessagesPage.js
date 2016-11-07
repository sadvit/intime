import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { loadDialogsForUser, loadUserVk, loadMessagesForUser, loadMessagesForChat } from '../actions'
import Wrapper from '../components/Wrapper.js'
import Dialogs from '../components/Dialogs.js'
import Messages from '../components/Messages.js'

//const INIT_MESSAGES_COUNT = 20;
const INIT_DIALOGS_COUNT = 20;
const MESSAGES_CHUNK = 20;
const DIALOGS_CHUNK = 20;

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

  loadMoreMessages() {
    let offset = this.props.messages.length;
    let currentDialog = this.props.currentDialog;
    if (currentDialog.userId) {
      this.props.loadMessagesForUser(currentDialog.userId, offset, MESSAGES_CHUNK);
    } else if (currentDialog.chatId) {
      this.props.loadMessagesForChat(currentDialog.chatId, offset, MESSAGES_CHUNK);
    }
  }

  loadMoreDialogs() {
    let offset = this.props.dialogs.length;
    this.props.loadDialogsForUser(offset, DIALOGS_CHUNK);
  }

  render() {
    return (
      <Wrapper pageName="messages">
        <Dialogs {...this.props} onScrollDown={this.loadMoreDialogs.bind(this)}/>
        <Messages {...this.props} onScrollTop={this.loadMoreMessages.bind(this)}/>
      </Wrapper>
    )
  }

}

const mapStateToProps = (state, ownProps) => {
  return {
    user: state.user,
    messages: state.messages.messages,
    dialogs: state.dialogs,
    currentDialog: state.currentDialog
  }
}

export default connect(mapStateToProps, {
  loadDialogsForUser, loadUserVk, loadMessagesForUser, loadMessagesForChat
})(MessagesPage)
