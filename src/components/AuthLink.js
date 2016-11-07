import React, { Component, PropTypes } from 'react'
import { loginVk } from '../actions'
import { connect } from 'react-redux'

class AuthLink extends Component {

  static propTypes = {
    type: PropTypes.string.isRequired,
  }

  openLink() {
    switch (this.props.type) {
      case 'vk':
        this.props.loginVk()
        break;
      case 'facebook':
        break;
      case 'linkedIn':
        break;
      case 'telegram':
        break;
      case 'skype':
        break;
      case 'whatsapp':
        break;
      default:
        break;
    }
  }

  render() {
    let classNameValue, srcImageValue;
    switch (this.props.type) {
      case 'vk':
        classNameValue = "vk-img";
        srcImageValue = "assets/vk.svg";
        break;
      case 'facebook':
        classNameValue = "facebook-img";
        srcImageValue = "assets/facebook.svg";
        break;
      case 'linkedIn':
        classNameValue = "linkedIn-img";
        srcImageValue = "assets/linkedIn.svg";
        break;
      case 'telegram':
        classNameValue = "telegram-img";
        srcImageValue = "assets/telegram.svg";
        break;
      case 'skype':
        classNameValue = "skype-img";
        srcImageValue = "assets/skype.svg";
        break;
      case 'whatsapp':
        classNameValue = "whatsapp-img";
        srcImageValue = "assets/whatsapp.svg";
        break;
      default:
        break;
    }
    return (
      <img alt={this.props.alt} className={classNameValue} onClick={this.openLink.bind(this)} src={srcImageValue}/>
    )
  }
}

export default connect((state, ownProps) => {
  return { user: state.user }
}, { loginVk })(AuthLink)
